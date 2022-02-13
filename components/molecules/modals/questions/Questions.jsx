import { Accordion, AccordionDetails, AccordionSummary, Box, Typography,SvgIcon } from '@material-ui/core';
import CustomIconButton from 'components/atoms/buttons/custom-icon-button/CustomIconButton';
import { questionsText } from 'lang/english/questionsText';
import React, { Fragment } from 'react';
import { useStyles } from './styleQuestions';
import ArrowDown from 'public/svg/components/ArrowDown';

const Questions = ({ close }) => {

    const classes = useStyles();
    return (
        <Fragment>
            <CustomIconButton action={close} />
            <Typography variant="h4">{questionsText.title}</Typography>
            <Box className={classes.accordionHolder}>
                {questionsText.questions.map(({ title, content, code }) => <Accordion key={code}>
                    <AccordionSummary expandIcon={<SvgIcon style={{ fontSize: 20 }}  component={ArrowDown}/>}>
                        <Typography variant={'h6'} >{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant={'body1'} style={{fontSize:'0.9rem'}}>{content}</Typography>
                    </AccordionDetails>
                </Accordion>)}
            </Box>

        </Fragment>
    );
};

export default Questions;