import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection:'column',
    overflowY:'scroll',
    overflowX:'hidden',
    gridGap: "2.5rem",
    height:'-webkit-fill-available',
    marginTop:'10px',
    padding:"10px 0px",
  },
}));
