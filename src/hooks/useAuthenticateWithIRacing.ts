import { Buffer } from "buffer";

const IRACING_AUTH_ENDPOINT = "https://members-ng.iracing.com/auth";

const hashPassword = async (password: string) => {
  const hash = await window.crypto.subtle.digest(
    "SHA-256",
    Buffer.from(password)
  );

  return Buffer.from(hash).toString("base64");
};

export interface UseAuthenticateWithIRacingHookOptions {}
export type UseAuthenticateWithIRacingHookResult = (
  email: string,
  password: string
) => void;
export type UseAuthenticateWithIRacingHook = (
  options?: UseAuthenticateWithIRacingHookOptions
) => UseAuthenticateWithIRacingHookResult;

export const useAuthenticateWithIRacing: UseAuthenticateWithIRacingHook =
  () => {
    const authenticateWithIRacing: UseAuthenticateWithIRacingHookResult =
      async (email, password) => {
        const passwordHash = await hashPassword(
          `${password}${email.toLowerCase()}`
        );

        try {
          await fetch(IRACING_AUTH_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password: passwordHash,
            }),
          });
        } catch (error) {
          console.log("Therr was an error", error);
          console.log(error);
        }
      };

    return authenticateWithIRacing;
  };

export default useAuthenticateWithIRacing;
