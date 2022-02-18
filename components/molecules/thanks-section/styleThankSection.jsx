import { makeStyles } from"@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
        paddingTop: '3.5rem',
        paddingBottom:'3.5rem',
    },
    buttonContainer: {
        display: "flex",
        gap: "2rem",
        marginTop: "69px",
        [theme.breakpoints.down('xs')]:{
            
            gap: "1.7rem",
            marginTop: "55px",
        }
    },
    textContainer: {
        maxWidth: "38rem",
        marginTop: "1.8rem",
    },
    textAdjust: {
        marginLeft: "-3px",
    },
    subtitle: {
        marginBottom: "1.8rem",
        [theme.breakpoints.down('xs')]:{
            marginBottom:"1.2rem"
        }
    },
}));