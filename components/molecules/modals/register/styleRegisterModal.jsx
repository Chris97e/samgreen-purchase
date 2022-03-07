import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {},
  description: {
    maxWidth: "25rem",
    marginTop: "1rem",
  },
  resultContainer: {
    width: "100%",
    height: "100%",
    maxWidth:'450px',
    display:'flex',
    flexDirection:'column',
    gap: '2.5rem',
    alignItems:'center',
    justifyContent:'center',
  },
  fixText:{
    marginTop:'30px',
  }
}));
