import Image from "next/image";
import React from "react";
import { useStyles } from "./styleLogo";

const Logo = () => {
  const classes = useStyles();
  return (
    <a
      target="_blank"
      href="https://shop.sam-green.com"
      rel="noopener noreferrer"
    >
      <Image src={"/svg/logo/logo.svg"} width={"150px"} height={"30px"} />
    </a>
  );
};

export default Logo;
