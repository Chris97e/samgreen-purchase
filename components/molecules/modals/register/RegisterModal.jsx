import {
  Box,
  Fade,
  FormHelperText,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@material-ui/core";
import CustomIconButton from "components/atoms/buttons/custom-icon-button/CustomIconButton";
import FormContainer from "components/atoms/container/form-container/FormContainer";
import InputHolder from "components/atoms/container/input-holder/InputHolder";
import CustomLabel from "components/atoms/label/CustomLabel";
import Email from "public/svg/components/Email";
import User from "public/svg/components/User";
import { errorsSystem } from "lang/english/errors";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { useStyles } from "./styleRegisterModal";
import { colors } from "styles/abstract/colors";
import LockClose from "public/svg/components/LockClose";
import LockOpen from "public/svg/components/LockOpen";
import SimpleButton from "components/atoms/buttons/simple-button/SimpleButton";
import CustomModal from "components/atoms/modal/custom-modal/CustomModal";
import ErrorModal from "../error/ErrorModal";
import useValidUsername from "hooks/useValidUsername";
import { CircularProgress } from "@material-ui/core";
import { register } from "lang/english/register";
import { setAndOpenError } from "utils/globalFunctions";
import useValidEmail from "hooks/useValidEmail";
import axiosDatabase from "utils/axios/axiosDatabase";
import IconState from "components/atoms/Icons/icons-state/IconState";
import FocusText from "components/atoms/text/focus-text/FocusText";

const RegisterModal = ({ close = () => {}, openFormPlant = ()=>{} }) => {
  const classes = useStyles();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState(errorsSystem("default"));
  const [isRegisterd, setIsRegisterd] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const closeErrorModal = () => setErrorOpen(false);

  //Custom hook check user
  const { isLoading: isLoadingUserCheck, isValid: isValidUser } =
    useValidUsername(userSearch);

  //Custom hook check email
  const { isLoading: isLoadingEmailCheck, isValid: isValidEmail } =
    useValidEmail(emailSearch);

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const errorBundles = {
      setIsLoading,
      setErrorMessage,
      setErrorOpen,
    };
    /*
    if (!isValidUser) {
      setAndOpenError(errorsSystem("userTaken", userSearch), errorBundles);
      return;
    }

    if (!isValidEmail) {
      setAndOpenError(errorsSystem("emailTaken", emailSearch), errorBundles);
      return;
    }*/

    try {
      let bodyFormData = new FormData();
      bodyFormData.append("nickname", userSearch);
      bodyFormData.append("email", emailSearch);
      bodyFormData.append("password", data?.password);
      bodyFormData.append("password_confirmation", data?.password);
      console.log("hellou");

      const register = await axiosDatabase({
        method: "POST",
        url: process.env.REGISTER,
        data: bodyFormData,
      });
      console.log(register);
      setIsLoading(false);
    } catch (error) {
      setAndOpenError(
        errorsSystem("customError", error.toString()),
        errorBundles
      );
    }
  };

  const renderProccess = (isRegistered = true) => {
    if (isRegistered) {
      return (
        <Fade in={true}>
          <Box className={classes.resultContainer}>
            <Typography
              variant="h4"
              className={classes.fixText}
              align={"center"}
            >
              {register.registerCompleted.title}{" "}
              <FocusText>{register.registerCompleted.focus}</FocusText>
            </Typography>
            <IconState />
            <Typography align="center">
              <strong>{emailSearch}</strong>
              {register.registerCompleted.description}
            </Typography>
            <SimpleButton action={openFormPlant} title={register.registerCompleted.button}/>
          </Box>
        </Fade>
      );
    }

    return (
      <Fragment>
        <Typography variant="h4" className={classes.fixText}>
          {register.title}
        </Typography>
        <Box className={classes.description}>
          <Typography style={{ fontSize: "1rem" }} variant="body1">
            {register.description}
          </Typography>
        </Box>

        {/*------------------------------------------------------------------------------------------Form */}

        <FormContainer handleSubmit={handleSubmit(onSubmit)}>
          {/*-------------------------------------------------------Username*/}
          <InputHolder>
            <CustomLabel label={register.labelNickname} />

            <TextField
              variant="outlined"
              fullWidth
              placeholder={register.labelPlaceholderNickname}
              value={userSearch}
              onChange={(e) => {
                setUserSearch(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isLoadingUserCheck ? (
                      <span style={{ marginRight: "12px", marginTop: "6px" }}>
                        <CircularProgress size={22} />
                      </span>
                    ) : null}

                    <SvgIcon component={User} />
                  </InputAdornment>
                ),
              }}
            />

            {!isValidUser && userSearch?.length > 1 && !isLoadingUserCheck && (
              <FormHelperText>This user is already taken</FormHelperText>
            )}
          </InputHolder>

          {/*-------------------------------------------------------Email*/}
          <InputHolder>
            <CustomLabel label={register.labelEmail} />
            <TextField
              variant="outlined"
              fullWidth
              placeholder={register.labelPlaceholderEmail}
              value={emailSearch}
              onChange={(e) => {
                setEmailSearch(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isLoadingEmailCheck ? (
                      <span style={{ marginRight: "12px", marginTop: "6px" }}>
                        <CircularProgress size={22} />
                      </span>
                    ) : null}
                    <SvgIcon component={Email} />
                  </InputAdornment>
                ),
              }}
            />
            {!isValidEmail &&
              emailSearch?.length > 4 &&
              !isLoadingEmailCheck && (
                <FormHelperText>This email is already taken</FormHelperText>
              )}
          </InputHolder>

          {/*-------------------------------------------------------Password*/}
          <InputHolder>
            <CustomLabel
              label={register.labelPassword}
              isTooltip={true}
              textTooltip={register?.passwordTooltip}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: register.errors.password.one,
                },
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  type={isShowPassword ? "text" : "password"}
                  placeholder={register.labelPlaceholderEmail}
                  {...field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{
                            marginRight: "-11px",
                          }}
                        >
                          {isShowPassword ? (
                            <SvgIcon
                              component={LockOpen}
                              style={{
                                color: colors.secondary.main,
                              }}
                            />
                          ) : (
                            <SvgIcon
                              component={LockClose}
                              style={{
                                color: colors.secondary.main,
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {errors?.password && (
              <FormHelperText>{errors?.password?.message}</FormHelperText>
            )}
          </InputHolder>

          {/*-------------------------------------------------------Repeat Password*/}
          <InputHolder>
            <CustomLabel label={register.labelPassword} />
            <Controller
              name="passwordRepeat"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: register.errors.password.one,
                },
                validate: {
                  positive: (value) =>
                    value === getValues().password ||
                    register?.errors?.password?.two,
                },
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  type={isShowPassword ? "text" : "password"}
                  placeholder={register.labelPlaceholderEmail}
                  {...field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{
                            marginRight: "-11px",
                          }}
                        >
                          {isShowPassword ? (
                            <SvgIcon
                              component={LockOpen}
                              style={{
                                color: colors.secondary.main,
                              }}
                            />
                          ) : (
                            <SvgIcon
                              component={LockClose}
                              style={{
                                color: colors.secondary.main,
                              }}
                            />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {errors?.passwordRepeat && (
              <FormHelperText>{errors?.passwordRepeat?.message}</FormHelperText>
            )}
          </InputHolder>

          <SimpleButton isLoading={isLoading} title={register.button} />
        </FormContainer>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <CustomIconButton action={close} />
      {renderProccess(true)}

      <CustomModal isOpen={errorOpen} onClose={closeErrorModal}>
        <ErrorModal
          close={closeErrorModal}
          title={errorMessage?.title}
          description={errorMessage?.message}
        />
      </CustomModal>
    </Fragment>
  );
};

export default RegisterModal;
