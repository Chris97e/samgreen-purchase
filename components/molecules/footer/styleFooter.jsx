import { makeStyles } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    gap: "1rem",
    padding: "1.6rem 3.125rem",
    position: "relative",
    borderTop:`1px solid ${colors.border.light}`,
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    }
    
  },
  left: {
    width: "fit-content",
    minWidth:'150px',
    display: "flex",
    alignItems:'center',
    [theme.breakpoints.down('xs')]:{
      width: "100%",
      justifyContent:'center',
    }
  },
  right: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:'center',
    [theme.breakpoints.down('xs')]:{
      width: "100%",
      justifyContent:'center',
      flexDirection:'column',
    }
  },
  textRights:{
    [theme.breakpoints.down('xs')]:{
     marginTop:'0px',
     marginBottom:'10px',
     textAlign:'center',
    }
  }
}));
