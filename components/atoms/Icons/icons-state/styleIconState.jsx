import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'styles/abstract/colors';

export const useStyles = makeStyles((theme) => ({
    mainIcon: {
        width: '11rem',
        height: '11rem',
        backgroundColor: colors.grey.container,
        borderRadius:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }

}))