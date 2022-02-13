import { Fade } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styleFadeInContainer";

const FadeInContainer = (props) => {
  const classes = useStyles();
  return (
    <span
      className={props?.in ? classes.opacity : classes.none}
    >
      {props.children}
    </span>
  );
};

export default FadeInContainer;
