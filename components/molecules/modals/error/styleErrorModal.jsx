import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    },
    buttonContainer:{
        marginTop:'2.5rem',
        display:'flex',
        justifyContent:'flex-end'
    },
}))