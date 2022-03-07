import { IconButton, SvgIcon } from "@material-ui/core";
import Youtube from "public/svg/components/Youtube";
import React from "react";

const SimpleIconButton = ({ icon = Youtube, url = process.env.HOME }) => {
  return (
    <a target="_blank" href={url} rel="noopener noreferrer">
      <IconButton>
        <SvgIcon component={icon} color="primary" />
      </IconButton>
    </a>
  );
};

export default SimpleIconButton;
