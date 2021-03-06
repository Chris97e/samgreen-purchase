import { makeStyles } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";

export const useStyles = makeStyles((theme) => ({
  accent:{
      color:colors.primary.main,
  },
  description:{
      maxWidth:'25rem',
      marginTop:'1rem',
  },
  switchContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  gridContainer:{
    display: 'grid',
    gap:'1rem',
    maxWidth:'100%',
    gridTemplateColumns:' 1fr 1fr 1fr',
    [theme.breakpoints.down('xs')]:{
      gridTemplateColumns:' 1fr',
    }
  }
}));

