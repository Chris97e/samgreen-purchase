import React from "react";
import { useStyles } from "components/molecules/footer/styleFooter";
import { Box, Typography } from "@material-ui/core";
import { footer } from "lang/english/footer";
import SocialIcons from "components/molecules/social-icons/SocialIcons";
import Image from 'next/image';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main} component="footer">
      <Box className={classes.left}>
        <a target="_blank" href="https://www.sam-green.com/home" rel="noopener noreferrer">
          <Image src={'/svg/logo/logo.svg'} width={'150px'} height={'30px'} />
        </a>
      </Box>
      <Box className={classes.right}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
          }}
        >
          {footer.copyright}
        </Typography>
        <SocialIcons />
      </Box>
    </Box>
  );
};

export default Footer;
