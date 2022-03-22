import React from 'react';
import { Modal, Backdrop, Fade, Box } from '@material-ui/core';
import { useStyles } from './styleCustomModal';

const CustomModal = (props) => {

    const classes = useStyles();

    return (
        <Modal
            open={props.isOpen}
            onClose={props.onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 400,
            }}
        >
            <Fade in={props.isOpen}>
                <span>
                    <Box className={classes.main} style={{width:props?.width?props.width:'auto'}}>
                        {props.children}
                    </Box>
                </span>
            </Fade>
        </Modal>
    );
};

export default CustomModal;