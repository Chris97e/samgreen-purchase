import { makeStyles } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";
import { radius } from "styles/abstract/radius";
import { shadow } from "styles/abstract/shadow";

export const useStyles = makeStyles((theme) => ({
  card: {
    border: `1px solid ${colors.border.main}`,
    maxWidth: "550px",
    backgroundColor: colors.white.main,
    borderRadius: radius.secondary,
    boxShadow: shadow.cardShadow,
    
    
  },
}));
