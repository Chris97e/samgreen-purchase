import {
  Box,
  Fade,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  SvgIcon,
  TextField,
  Typography,
} from "@material-ui/core";
import CustomIconButton from "components/atoms/buttons/custom-icon-button/CustomIconButton";
import FormContainer from "components/atoms/container/form-container/FormContainer";
import InputHolder from "components/atoms/container/input-holder/InputHolder";
import CustomLabel from "components/atoms/label/CustomLabel";
import { register } from "lang/english/register";
import Email from "public/svg/components/Email";
import User from "public/svg/components/User";
import React, { Fragment, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useStyles } from "./styleRegisterModal";
import { colors } from "styles/abstract/colors";
import LockClose from "public/svg/components/LockClose";
import LockOpen from "public/svg/components/LockOpen";
import { form } from "lang/english/form";
import CardSelector from "components/atoms/cards/card-selector/CardSelector";
import SimpleButton from "components/atoms/buttons/simple-button/SimpleButton";
import CustomModal from "components/atoms/modal/custom-modal/CustomModal";
import ErrorModal from "../error/ErrorModal";
import useValidUsername from "hooks/useValidUsername";
import { CircularProgress } from "@material-ui/core";

const RegisterModal = ({ close = () => {} }) => {
  const classes = useStyles();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("placeholder");
  const [errorMessage, setErrorMessage] = useState("All fields are required");
  const [errorOpen, setErrorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const closeErrorModal = () => setErrorOpen(false);

  //Custom hook
  const { isLoading: isLoadingUserCheck, isValid } =
    useValidUsername(userSearch);

  //Reset value when change continent change
  useEffect(() => {
    setSelectedLocation("placeholder");
  }, [selectedContinent]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    if (!selectedContinent?.code) {
      setErrorMessage("Continent are required");
      setErrorOpen(true);
      return;
    }

    if (selectedLocation === "placeholder") {
      setErrorMessage("Location are required");
      setErrorOpen(true);
      return;
    }

    setIsLoading(true);
  };

  return (
    <Fragment>
      <CustomIconButton action={close} />
      <Typography variant="h4">{register.title}</Typography>
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

          {isValid && userSearch?.length > 1 && (
            <FormHelperText>This user is already taken</FormHelperText>
          )}
        </InputHolder>

        {/*-------------------------------------------------------Email*/}
        <InputHolder>
          <CustomLabel label={register.labelEmail} />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: register.errors.email.one,
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: register.errors.email.two,
              },
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                placeholder={register.labelPlaceholderEmail}
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SvgIcon component={Email} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {errors?.email && (
            <FormHelperText>{errors?.email?.message}</FormHelperText>
          )}
        </InputHolder>

        {/*-------------------------------------------------------Email*/}
        <InputHolder>
          <CustomLabel label={register.labelPassword} isTooltip={true} />
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

        {/*-------------------------------------------------------State*/}
        <InputHolder>
          <CustomLabel label={form.continent} />
          <Grid container spacing={3}>
            {form.continentArray.map(({ code, name, icon }) => (
              <Grid key={code} item xs={6} sm={4}>
                <CardSelector
                  code={code}
                  name={name}
                  icon={icon}
                  selectedCode={selectedContinent?.code}
                  action={() => {
                    setSelectedContinent({ code: code, name: name });
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </InputHolder>

        <Fade in={selectedContinent?.code != null}>
          <span
            style={{
              height: selectedContinent?.code ? "auto" : "0px",
              transition: "height 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <InputHolder>
              <CustomLabel label={form.location} />
              <Select
                value={selectedLocation}
                onChange={(event) => {
                  setSelectedLocation(event.target.value);
                }}
              >
                <MenuItem
                  value="placeholder"
                  disabled
                  style={{ display: "none" }}
                >
                  <span style={{ opacity: "0.6" }}>
                    {form.locationPlaceholder}
                  </span>
                </MenuItem>
                {form?.places[selectedContinent?.code]?.map((text, index) => (
                  <MenuItem key={`${index}.item`} value={text}>
                    {text}
                  </MenuItem>
                ))}
              </Select>
            </InputHolder>
          </span>
        </Fade>

        <SimpleButton isLoading={isLoading} title={register.button} />
      </FormContainer>

      <CustomModal isOpen={errorOpen} onClose={closeErrorModal}>
        <ErrorModal close={closeErrorModal} title={errorMessage} />
      </CustomModal>
    </Fragment>
  );
};

export default RegisterModal;
