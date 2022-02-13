import { Box, SvgIcon, Typography } from '@material-ui/core';
import CustomIconButton from 'components/atoms/buttons/custom-icon-button/CustomIconButton';
import SimpleButton from 'components/atoms/buttons/simple-button/SimpleButton';
import Warning from 'public/svg/components/Warning';
import React, { Fragment } from 'react';
import { useStyles } from './styleErrorModal';

const ErrorModal = ({ title = "All fields are required ", description = "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent. ", accept = "Accept", close = () => { } }) => {
    const classes = useStyles();
    return (
        <Fragment>
            <CustomIconButton action={close}/>
            <Box className={classes.container}>
                <SvgIcon  style={{ fontSize: '2.5rem' }} component={Warning} color='primary' />
                <Typography variant='h4'>{title}</Typography>
            </Box>
            <Typography style={{fontSize: '1rem', marginTop:'1rem'}}>{description}</Typography>
            <Box className={classes.buttonContainer}>
                <SimpleButton title={accept} action={close} />
            </Box>
        </Fragment>
    );
};

export default ErrorModal;