import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styleInputHolder';

const InputHolder = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.main}>
            {props.children}
        </Box>
    );
};

export default InputHolder;