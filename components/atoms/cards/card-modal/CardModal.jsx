import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styleCardModal';

const CardModal = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.card}>
            {props.children}
        </Box>
    );
};

export default CardModal;