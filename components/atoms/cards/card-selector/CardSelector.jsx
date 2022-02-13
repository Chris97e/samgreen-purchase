import { Box, SvgIcon, Typography } from '@material-ui/core';
import NorthAmerica from 'public/svg/components/continent/NorthAmerica';
import React from 'react';
import { useStyles } from './styleCardSelector';

const CardSelector = ({ name = 'North America', icon = NorthAmerica, code = '01', selectedCode = '', action= ()=>{} }) => {
    const classes = useStyles();
    return (
        <Box className={`${classes.main} ${selectedCode == code ? classes.active : null}`} onClick={action}>
            <SvgIcon component={icon} />
            <Typography variant='body1' style={{ fontSize: '1rem', textAlign: 'center' }}>{name}</Typography>
        </Box>
    );
};

export default CardSelector;