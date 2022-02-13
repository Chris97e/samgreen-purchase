import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "components/atoms/container/form-container/styleFormContainer";

const FormContainer = (props) => {
  const classes = useStyles();
  return (
    <form
      autoComplete="off"
      onSubmit={props?.handleSubmit}
      className={classes.main}
    >
      {props.children}
    </form>
  );
};

export default FormContainer;
