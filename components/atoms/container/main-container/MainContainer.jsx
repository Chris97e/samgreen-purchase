import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./styleMainContainer";

const MainContainer = (props) => {
  const classes = useStyles();
  return <Container className={classes.main}>
      {props.children}
  </Container>;
};

export default MainContainer;
