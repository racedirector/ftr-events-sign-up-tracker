import React, { useCallback } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, Text, Input, makeStyles } from "@rneui/themed";
import { capitalize } from "lodash";
import { useForm, Controller } from "react-hook-form";
import strings from "@/constants/strings";

export type SignInFormFields = {
  email: string;
  password: string;
};

export interface SignInFormProps extends Partial<SignInFormFields> {
  detail?: string;
  style?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onSubmit?: (data: SignInFormFields) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  detail = null,
  email = "",
  password = "",
  style = null,
  inputContainerStyle = null,
  onSubmit = () => {},
}) => {
  const styles = useStyles(makeStyles);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInFormFields>({
    defaultValues: {
      email,
      password,
    },
  });

  const submitCallback = useCallback(
    (data: SignInFormFields) => {
      onSubmit(data);
      reset();
    },
    [onSubmit, reset]
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.titleLabel}>
          {capitalize(strings.t("signInForm.title"))}
        </Text>
        {detail && <Text style={styles.bodyLabel}>{detail}</Text>}
      </View>
      <View style={styles.formContainer}>
        <View style={[styles.inputContainer, inputContainerStyle]}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[styles.emailField, styles.input]}
                placeholder={capitalize(
                  strings.t("signInForm.emailPlaceholder")
                )}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text>
              {capitalize(
                strings.t("signInForm.fieldIsRequired", {
                  field: strings.t("signInForm.emailPlaceholder"),
                })
              )}
            </Text>
          )}

          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry
                style={[styles.passwordField, styles.input]}
                placeholder={capitalize(
                  strings.t("signInForm.passwordPlaceholder")
                )}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.password && (
            <Text>
              {capitalize(
                strings.t("signInForm.fieldIsRequired", {
                  field: strings.t("signInForm.passwordPlaceholder"),
                })
              )}
            </Text>
          )}
        </View>

        <Button
          color={styles.submitButton.backgroundColor}
          title={strings.translate("signInForm.submitTitle")}
          onPress={handleSubmit(submitCallback)}
        />
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    rowGap: 28,
  },
  textContainer: {},
  titleLabel: {
    color: theme.colors.text,
    fontWeight: "bold",
    fontSize: 36,
  },
  bodyLabel: {
    color: theme.colors.text,
  },
  formContainer: {},
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {},
  emailField: {
    color: theme.colors.text,
  },
  passwordField: {
    color: theme.colors.text,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
  },
}));

export default SignInForm;
