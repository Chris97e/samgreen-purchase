import { Button, SvgIcon } from "@material-ui/core";
import ArrowRight from "public/svg/components/ArrowRight";
import React, { Fragment } from "react";
import { useStyles } from "components/atoms/buttons/simple-button/styleSimpleButton";
import Lottie from "react-lottie";
import LoadingDots from 'public/lotties/loading-dots.json';

//Default lottie options
const defaultLottieOptions = {
  loop: true,
  autoplay: true,

};

const SimpleButton = ({
  title = "Botón",
  variant = "contained",
  action = () => { },
  isLoading = false,
  isIcon = true,
}) => {
  const classes = useStyles();
  return (
    <Button disabled={isLoading} type="submit" className={classes.main} variant={variant} onClick={action}>
      {isLoading ?
        <Lottie
          options={{
            animationData: LoadingDots,
            ...defaultLottieOptions,
          }}
          width={'250px'}
          style={
            { marginTop: '20px', }
          }

        /> :
        <Fragment><span>{title}</span> {isIcon && <SvgIcon component={ArrowRight} />}</Fragment>}
    </Button>
  );
};

export default SimpleButton;
