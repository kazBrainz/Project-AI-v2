import ForgotPasswordForm from "@/components/Auth/ForgotPassword";
import LoginLayout from "@/components/Auth/LoginLayout";
import React from "react";

function ForgotPassword() {
  return (
    <LoginLayout>
      <ForgotPasswordForm />
    </LoginLayout>
  );
}

export default ForgotPassword;
