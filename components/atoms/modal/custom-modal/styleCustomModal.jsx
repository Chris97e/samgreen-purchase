import { makeStyles } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";
import { radius } from "styles/abstract/radius";
import { shadow } from "styles/abstract/shadow";

export const useStyles = makeStyles((theme) => ({
  main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: colors.white.main,
    borderRadius: radius.secondary,
    maxWidth: "800px",
    maxHeight: "90vh",
    minHeight: "20hv",
    overflow: "hidden",
    padding: "32px 32px 32px 32px",
    display: "flex",
    flexDirection: "column",
    backdropFilter: `drop-shadow(${shadow.modalShadow})`,
    [theme.breakpoints.down("xs")]: {
      maxHeight: "95vh",
      width: "90vw",
      maxWidth: "90vw",
    },
  },
}));
