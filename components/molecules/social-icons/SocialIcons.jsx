import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "components/molecules/social-icons/styleSocialIcons";
import SimpleIconButton from "components/atoms/Icons/simple-Icon-button/SimpleIconButton";
import { socialIconsText } from "lang/english/social-icons-text";

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      {socialIconsText.map((item) => (
        <SimpleIconButton key={item?.url} url={item?.url} icon={item?.icon} />
      ))}
    </Box>
  );
};

export default SocialIcons;
