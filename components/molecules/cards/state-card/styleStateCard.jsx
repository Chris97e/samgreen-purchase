import { makeStyles } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent:'center',
    alignItems:'center'
  },
  cardContainer:{
    display:'grid',
    justifyItems:'center',
    alignItems:'center',  
    gap:'2rem',
    position:'relative',
    padding: "2rem",
  },
  textContainer:{
      maxWidth:'100%'
  }
}));
