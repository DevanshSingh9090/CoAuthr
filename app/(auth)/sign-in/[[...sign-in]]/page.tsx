import { SignIn } from "@clerk/nextjs";

// "[[...sign-in]]" is an optional catch-all route: Clerk uses extra URL
// segments (like /sign-in/factor-one) for multi-step sign-in.
const SignInPage = () => {
  return <SignIn />;
};

export default SignInPage;
