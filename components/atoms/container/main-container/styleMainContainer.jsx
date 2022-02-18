import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: '3.5rem',
        paddingBottom:'3.5rem',
        [theme.breakpoints.down('xs')]:{
            paddingLeft:'20px',
            paddingRight:'20px',
        }
    },
}))