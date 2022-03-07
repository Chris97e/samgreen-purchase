import { Box, IconButton, SvgIcon } from "@material-ui/core";
import Instagram from "public/svg/components/Instagram";
import Tiktok from "public/svg/components/Tiktok";
import Whatsapp from "public/svg/components/Whatsapp";
import Youtube from "public/svg/components/youtube";
import React from "react";
import { useStyles } from "components/molecules/social-icons/styleSocialIcons";
import SimpleIconButton from "components/atoms/Icons/simple-Icon-button/SimpleIconButton";
import { socialIcons } from "lang/english/social-icons";

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      {socialIcons.map((item) => (
        <SimpleIconButton key={item?.url} url={item?.url} icon={item?.icon} />
      ))}
    </Box>
  );
};

export default SocialIcons;
