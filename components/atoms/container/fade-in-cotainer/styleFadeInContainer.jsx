import { makeStyles } from "@material-ui/core/styles";
import { animations } from "styles/abstract/animations";

export const useStyles = makeStyles((theme) => ({
  "@keyframes softEnter": {
    "0%": {
      opacity: 0,
      
    },
    "100%": {
      opacity: 1,
      
    },
  },
  opacity: {
    animation: `$softEnter 600ms ${theme.transitions.easing.easeInOut}`,
    display: "grid",
    gap: "2.5rem",
  },
  none: {
    animation: "none",
    display:'none'
  },
}));
