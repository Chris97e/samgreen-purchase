import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    main: {
        display:'grid',
        gridTemplateColumns: '1fr',
        gridGap:'1rem',
        width:'100%',
        height:'fit-content'
    }
}))