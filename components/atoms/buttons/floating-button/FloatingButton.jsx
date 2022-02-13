import { Fab, SvgIcon, Zoom } from "@material-ui/core";
import QuestionRounded from "public/svg/components/QuestionRounded";
import React from "react";
import { useStyles } from "./styleFloatingButton";

const FloatingButton = ({ action = () => {} }) => {
  const classes = useStyles();
  return (
    <Zoom in={true} unmountOnExit>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.main}
        onClick={action}
      >
        <SvgIcon component={QuestionRounded} style={{
            fontSize:'2rem'
        }} />
      </Fab>
    </Zoom>
  );
};

export default FloatingButton;
