import { makeStyles } from '@material-ui/core/styles';
import { colors } from 'styles/abstract/colors';
import { radius } from 'styles/abstract/radius';
import { shadow } from 'styles/abstract/shadow';


export const useStyles = makeStyles((theme) => ({
    main: {
        minWidth: '140px',
        height: '140px',
        border: `1px solid ${colors.border.main} `,
        background: colors.white.main,
        borderRadius: radius.quaternary,
        boxShadow: shadow.inputShadow,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'box-shadow 200ms ease-in-out',
        '& svg': {
            fill: colors.grey.icon,
            transition: 'fill 100ms ease-in-out',
        },
        '&:hover': {
            boxShadow: shadow.inputShadowHover,
            '& svg': {
                fill: colors.primary.main,
            }
        },
        [theme.breakpoints.down('xs')]:{
            '&:hover': {
                boxShadow: shadow.inputShadowHover,
                '& svg': {
                    fill: `${colors.secondary.main} !important`,
                }
            }
        }
    },

    active:{
        '& svg':{
            fill: `${colors.primary.main} !important`,
        }
    }
}))