import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'styles/abstract/colors';

export const useStyles = makeStyles((theme) => ({
    mainContainer:{
        width:'100%',
        height:'70px',
        backgroundColor:colors.grey.container,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }

}))