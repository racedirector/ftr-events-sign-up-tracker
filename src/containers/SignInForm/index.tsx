import React from "react";
import {
  SignInFormFields,
  SignInForm as SignInFormUI,
} from "@/components/SignInForm";
import useAuthenticateWithIRacing from "@/hooks/useAuthenticateWithIRacing";

export interface SignInFormProps {}

export const SignInForm: React.FC<SignInFormProps> = () => {
  const authenticate = useAuthenticateWithIRacing();

  const onSubmitCallback = ({ email, password }: SignInFormFields) => {
    authenticate(email, password);
  };

  return <SignInFormUI onSubmit={onSubmitCallback} />;
};

export default SignInForm;
