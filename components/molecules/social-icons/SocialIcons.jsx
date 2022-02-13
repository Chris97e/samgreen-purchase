import { Box, IconButton, SvgIcon } from "@material-ui/core";
import Instagram from "public/svg/components/Instagram";
import Tiktok from "public/svg/components/Tiktok";
import Whatsapp from "public/svg/components/Whatsapp";
import Youtube from "public/svg/components/youtube";
import React from "react";
import { useStyles } from "components/molecules/social-icons/styleSocialIcons";

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <IconButton>
        <SvgIcon component={Youtube} color="primary"/>
      </IconButton>
      <IconButton>
        <SvgIcon component={Tiktok} color="primary"/>
      </IconButton>
      <IconButton>
        <SvgIcon component={Whatsapp} color="primary"/>
      </IconButton>
      <IconButton>
        <SvgIcon component={Instagram} color="primary"/>
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
