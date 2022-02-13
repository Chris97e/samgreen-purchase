import { makeStyles } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";

export const useStyles = makeStyles((theme) => ({
  main: {
    "& svg": {
      color: colors.border.icon,
    },
    "&:hover": {
      "& svg": {
          color:colors.secondary.light,
      },
    },
  },
}));
