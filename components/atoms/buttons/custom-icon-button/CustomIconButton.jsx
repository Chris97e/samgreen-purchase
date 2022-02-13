import { SvgIcon, IconButton } from "@material-ui/core";
import Close from "public/svg/components/Close";
import React from "react";
import { useStyles } from "./styleCustomIconButton";

const defaultIconPosition = {
  position: "absolute",
  right: "0.8rem",
  top: "0.8rem",
  zIndex: "10",
};

const CustomIconButton = ({
  icon = Close,
  action = () => {},
  customStyle = defaultIconPosition,
}) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.main} onClick={action} style={customStyle}>
      <SvgIcon component={icon} />
    </IconButton>
  );
};

export default CustomIconButton;
