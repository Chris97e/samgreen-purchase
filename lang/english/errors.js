export const errorsSystem = (errorName = "default", params = "") => {
  const errors = {
    default: {
      title: "These is a default error title",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    profileNotFound: {
      title: "The profile username doesn't exist",
      message: `We haven't found ${params} on our dateabase. Please enter only valid profiles and try again.`,
    },
    allFields: {
      title: "All fields are required",
      message: "Please fill out all the form to continue.",
    },
    customError: {
      title: "Opps something went wrong",
      message: `There was an error processing the request. ${params}. Please try again, if the error persists contact support.`,
    },
    productsNoLinked:{
      title: "Opps something went wrong",
      message: "We couldn't link your products and plant your tree. Please contact support",
    },
    userTaken:{
      title: "This user is already taken",
      message: `Please try with a diferent profile username. ${params} is already taken`,
    },
    emailTaken:{
      title: "This email is already taken",
      message: `Please try with a diferent email. ${params} is already taken`,
    }

  };

  return errors[errorName];
};
