import LoginLayout from "@/components/Auth/LoginLayout";
import SignUpForm from "@/components/Auth/SignUpForm";
import { FaUser } from "react-icons/fa";

function SignUp() {
  return (
    <LoginLayout>
      <SignUpForm />
    </LoginLayout>
  );
}

export default SignUp;
