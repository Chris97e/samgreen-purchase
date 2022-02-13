import { Box, Grow, SvgIcon, Tooltip, Typography, Zoom } from "@material-ui/core";
import Question from "public/svg/components/Question";
import React from "react";
import { useStyles } from "./styleCustomLabel";

const CustomLabe = ({
  label = "Label",
  textTooltip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  isTooltip = false,
}) => {

  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Typography variant={'h5'}>{label}</Typography>
      {isTooltip && <Tooltip TransitionComponent={Grow} TransitionProps={{ timeout: 600 }} title={textTooltip} placement="top">
        <span style={{display:'flex', alignItems:'center'}}>
          <SvgIcon component={Question} />
        </span>
      </Tooltip>}
    </Box>
  );
};

export default CustomLabe;
