import React from "react";
import { useStyles } from "./styleFocusText";

const FocusText = (props) => {
  const classes = useStyles();
  return <span className={classes.focus}>{props.children}</span>;
};

export default FocusText;
