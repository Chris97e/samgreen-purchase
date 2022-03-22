import React, { Fragment, useState } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import SimpleButton from "components/atoms/buttons/simple-button/SimpleButton";
import { tree } from "lang/english/tree";
import { useStyles } from "components/molecules/thanks-section/styleThankSection";
import TreeForm from "components/molecules/modals/tree-form/TreeForm";
import Questions from "../modals/questions/Questions";
import CustomModal from "components/atoms/modal/custom-modal/CustomModal";
import FloatingButton from "components/atoms/buttons/floating-button/FloatingButton";
import RegisterModal from "../modals/register/RegisterModal";
import MainContainer from "components/atoms/container/main-container/MainContainer";

const ThankSection = ({ ticket, isMultiProduct }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const closeForm = () => setOpenForm(false);
  const closeQuestion = () => setOpenQuestion(false);
  const closeRegister = () => setOpenRegister(false);
  const classes = useStyles();

  const openFormFromRegister = () => {
    setOpenForm(true);
    //closeRegister();
  };

  return (
    <Fragment>
      <MainContainer>
        <Box>
          <Typography className={classes.subtitle} variant="subtitle1">
            {tree.subtitle}
          </Typography>
          <Typography className={classes.textAdjust} variant="h1">
            {tree.title}
          </Typography>
          <Typography
            className={classes.textAdjust}
            variant="h1"
            color={"primary"}
          >
            {tree.titleAcent}
          </Typography>
        </Box>
        <Box className={classes.textContainer}>
          <Typography variant="body1">{tree.description}</Typography>
        </Box>
        <Box className={classes.buttonContainer}>
          <SimpleButton
            action={() => {
              setOpenForm(true);
            }}
            title={tree.buttonPrimary}
          />
          <SimpleButton
            title={tree.buttonSecondary}
            action={() => {
              setOpenRegister(true);
            }}
            variant="outlined"
          />
        </Box>
      </MainContainer>

      <FloatingButton
        action={() => {
          setOpenQuestion(true);
        }}
      />

      <CustomModal isOpen={openForm} onClose={closeForm}>
        <TreeForm
          close={closeForm}
          ticket={ticket}
          isMultiProduct={isMultiProduct}
        />
      </CustomModal>

      <CustomModal isOpen={openQuestion} onClose={closeQuestion}>
        <Questions close={closeQuestion} />
      </CustomModal>

      <CustomModal isOpen={openRegister} onClose={closeRegister} width={'600px'}>
        <RegisterModal
          close={closeRegister}
          openFormPlant={openFormFromRegister}
        />
      </CustomModal>
    </Fragment>
  );
};

export default ThankSection;
