import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "components/atoms/banners/forest/stylesForest";

const Forest = ({ height = "150px" }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.main}
      style={{
        height: height,
      }}
    >
      <img className={classes.img} src="/svg/illustration/forest.svg" />
    </Box>
  );
};

export default Forest;
