import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  main: {
    "& span": {
      "& span": {
        marginRight: "1rem",
        transition: "margin 200ms ease-out",
      },
    },
    "&:hover span span": {
      marginRight: "1.5rem",
    },
  },
  lottie:{
    border:'1px solid red',
  }
}));
