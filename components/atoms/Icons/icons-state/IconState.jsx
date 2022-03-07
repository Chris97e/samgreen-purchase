import { Box, SvgIcon } from "@material-ui/core";
import Check from "public/svg/components/Check";
import React from "react";
import { colors } from "styles/abstract/colors";
import { useStyles } from "./styleIconState";

const IconState = ({ icon = Check }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainIcon}>
      <SvgIcon component={icon} style={{
        fontSize:'5rem',
        color:colors.secondary.main,
      }} />
    </Box>
  );
};

export default IconState;
