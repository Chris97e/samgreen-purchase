import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styleFooterButton";

const FooterButton = ({ text = "Text placeholder", route="https://shop.sam-green.com/" }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <a href={route}>
        <Typography
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {text}
        </Typography>
      </a>
    </Box>
  );
};

export default FooterButton;
