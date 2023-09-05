import type { StorybookConfig } from "@storybook/react-webpack5";
import { join, dirname } from "path";
import webpackConfig from "../webpack.config";
import paths from "../paths";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    const normalizedConfig = webpackConfig("development");
    const mergedConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: [
          ...(normalizedConfig.resolve?.extensions || []),
          ...(config.resolve?.extensions || []),
        ],
        alias: {
          ...(config.resolve?.alias || {}),
          ...normalizedConfig.resolve?.alias,
        },
      },
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules || []),
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: [
              `${paths.appNodeModules}/@rneui/themed`,
              `${paths.appNodeModules}/@rneui/base`,
              `${paths.appNodeModules}/react-native-vector-icons`,
              `${paths.appNodeModules}/react-native-ratings`,
            ],
            loader: require.resolve("babel-loader"),
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              presets: [
                [
                  require.resolve("babel-preset-react-app"),
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        ],
      },
    };

    return mergedConfig;
  },
};
export default config;
