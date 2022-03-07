export const register = {
  title: "Sign up for a Samgreen profile",
  description:
    "Sign up and get a Samgreen profile to share all your information.",
  labelNickname: "Profile username",
  labelPlaceholderNickname: "your profile username",
  labelEmail: "Email",
  labelPlaceholderEmail: "your email",
  labelPassword: "Password",
  passwordTooltip:"Password must be at least 8 characters",
  button: "Create account",
  errors: {
    nickname: {
      one: "* The Nickname is required",
    },
    email: {
      one: "* The Email is required",
      two: "* The Email is invalid",
    },
    password: {
      one: "* The password is required",
      two: "* Password does not match",
    },
  },
  registerCompleted:{
    title: "Your account was created",
    focus: "Successfully",
    description:"An email was sent to your inbox to confirm the account creation. You can start using your Samgreen profile to finish up your order.",
    button: "Plant your tree",
  }
};
