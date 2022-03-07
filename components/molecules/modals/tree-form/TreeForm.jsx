import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  SvgIcon,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, Fragment } from "react";
import { useStyles } from "components/molecules/modals/tree-form/styleTreeForm";
import { modalTree } from "lang/english/modalTree";
import CustomIconButton from "components/atoms/buttons/custom-icon-button/CustomIconButton";
import FormContainer from "components/atoms/container/form-container/FormContainer";
import InputHolder from "components/atoms/container/input-holder/InputHolder";
import CustomLabel from "components/atoms/label/CustomLabel";
import User from "public/svg/components/User";
import CardSelector from "components/atoms/cards/card-selector/CardSelector";
import { form } from "lang/english/form";
import SimpleButton from "components/atoms/buttons/simple-button/SimpleButton";
import CustomModal from "components/atoms/modal/custom-modal/CustomModal";
import ErrorModal from "components/molecules/modals/error/ErrorModal";
import FadeInContainer from "components/atoms/container/fade-in-cotainer/FadeInContainer";
import axiosDatabase from "utils/axios/axiosDatabase";
import { errorsSystem } from "lang/english/errors";
import { plantATreeBundle, setAndOpenError } from "utils/globalFunctions";
import axiosStore from "utils/axios/axiosStore";
import { useRouter } from "next/router";

const TreeForm = ({ close = () => {}, ticket, isMultiProduct }) => {
  const classes = useStyles();
  const router = useRouter();
  const [selectedContinent, setSelectedContinent] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("placeholder");
  const [user, setUser] = useState("");
  const [multiUsers, setMultiUsers] = useState(
    ticket?.line_items?.map(() => "")
  );
  const [isAllWithSameProfile, setIsAllWithSameProfile] = useState(true);
  const [errorMessage, setErrorMessage] = useState(errorsSystem("default"));
  const [errorOpen, setErrorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const closeErrorModal = () => setErrorOpen(false);
  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleMultiChange = (prop) => (event) => {
    multiUsers[prop] = event.target.value;
    setMultiUsers([...multiUsers]);
  };

  const submitOneProduct = async (errorBundles) => {
    const userExist = await axiosDatabase
      .get(`${process.env.CHECK_USER}${user}`)
      .then((res) => res.data);
    console.log(userExist);

    //If the user does not exist display error message
    if (!userExist?.message) {
      setAndOpenError(errorsSystem("profileNotFound", user), errorBundles);
      return;
    }

    /*const plantATree = await axiosDatabase.post(
        process.env.PLANT_A_TREE,
        plantATreeBundle(ticket?.id, selectedContinent, selectedLocation, [
          { nickname: user, productid: ticket?.line_items[0]?.id },
        ])
      );*/
  };

  const submitMultiProduct = async (errorBundles) => {
    if (isAllWithSameProfile) {
      const userExist = await axiosDatabase
        .get(`${process.env.CHECK_USER}${user}`)
        .then((res) => res.data);
      console.log(userExist);

      //If the user does not exist display error message
      if (!userExist?.message) {
        setAndOpenError(errorsSystem("profileNotFound", user), errorBundles);
        return;
      }

      const plantATree = await axiosDatabase.post(
        process.env.PLANT_A_TREE,
        plantATreeBundle(
          ticket?.id,
          selectedContinent,
          selectedLocation,
          ticket?.line_items?.map((item) => {
            return { nickname: user, productid: item?.id };
          })
        )
      );
    } else {
      const checkAllUsers = await Promise.all(
        multiUsers.map((item) =>
          axiosDatabase
            .get(`${process.env.CHECK_USER}${item}`)
            .then((res) => res.data)
        )
      );

      const plantATree = await axiosDatabase.post(
        process.env.PLANT_A_TREE,
        plantATreeBundle(
          ticket?.id,
          selectedContinent,
          selectedLocation,
          ticket?.line_items?.map((item, index) => {
            return { nickname: multiUsers[index], productid: item?.id };
          })
        )
      );
    }
  };

  const plantTreeAction = async () => {
    const errorBundles = {
      setIsLoading,
      setErrorMessage,
      setErrorOpen,
    };

    if (
      user?.length === 0 ||
      !selectedContinent?.code ||
      selectedLocation === "placeholder"
    ) {
      setAndOpenError(errorsSystem("allFields"), errorBundles);
      return;
    }

    setIsLoading(true);
    try {
      if (isMultiProduct) {
        await submitMultiProduct(errorBundles);
      } else {
        await submitOneProduct(errorBundles);
      }

      const updateStore = await axiosStore({
        method: "PATCH",
        url: `${process.env.ORDERS}${ticket?.id}`,
        params: {
          status: "on-hold",
        },
      });

      if (updateStore.status === 200) {
        router.push(`${process.env.CHECK_STATUS}${ticket?.id}`);
        return;
      }

      //In case somenthing went wrong
      setAndOpenError(errorsSystem("productsNoLinked"), errorBundles);
    } catch (error) {
      setAndOpenError(
        errorsSystem("customError", error.toString()),
        errorBundles
      );
    }
  };

  const renderMultipleProductsProfile = (items) => {
    if (selectedLocation === "placeholder") return null;

    if (isAllWithSameProfile || !isMultiProduct)
      return (
        <FadeInContainer in={selectedLocation != "placeholder"}>
          <InputHolder>
            <CustomLabel
              label={form.profile}
              isTooltip={true}
              textTooltip={form.tooltipProfile}
            />
            <TextField
              variant="outlined"
              value={user}
              onChange={handleChange}
              placeholder={form.profilePlaceholdar}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SvgIcon component={User} />
                  </InputAdornment>
                ),
              }}
            />
          </InputHolder>
        </FadeInContainer>
      );

    return (
      <FadeInContainer in={!isAllWithSameProfile}>
        {items.map((item, index) => (
          <InputHolder key={item?.id}>
            <CustomLabel label={item?.name} />
            <TextField
              variant="outlined"
              placeholder={form.profilePlaceholdar}
              value={multiUsers[index]}
              onChange={handleMultiChange(index)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SvgIcon component={User} />
                  </InputAdornment>
                ),
              }}
            />
          </InputHolder>
        ))}
      </FadeInContainer>
    );
  };

  return (
    <Fragment>
      {!isLoading && <CustomIconButton action={close} />}
      <Typography variant="h4">{modalTree.title}</Typography>
      <Typography variant="h4">
        {modalTree.secondTitle}
        <span className={classes.accent}>{" " + modalTree.acent}</span>
      </Typography>
      <Box className={classes.description}>
        <Typography style={{ fontSize: "1rem" }} variant="body1">
          {modalTree.description}
        </Typography>
      </Box>

      {/**------------------------------------------------------------------------------------------Form */}
      <FormContainer>
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
                    setSelectedLocation("placeholder");
                    setSelectedContinent({ code: code, name: name });
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </InputHolder>

        <FadeInContainer in={selectedContinent?.code != null}>
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
        </FadeInContainer>

        <FadeInContainer
          in={selectedLocation != "placeholder" && isMultiProduct}
        >
          <InputHolder>
            <CustomLabel
              label={form.multiProducts.inputLabel}
              isTooltip={true}
              textTooltip={form.multiProducts.tooltipMultiProducts}
            />
            <Box className={classes.switchContainer}>
              <Typography style={{ marginLeft: "0.1rem" }}>
                {form.multiProducts.inputSwitch}
              </Typography>
              <Switch
                color="primary"
                label="Gilad Gray"
                checked={isAllWithSameProfile}
                onChange={(event) => {
                  setIsAllWithSameProfile(event.target.checked);
                }}
              />
            </Box>
          </InputHolder>
        </FadeInContainer>

        {renderMultipleProductsProfile(ticket?.line_items)}

        <SimpleButton
          isLoading={isLoading}
          title={form.button}
          action={plantTreeAction}
        />
        <span style={{ height: "200px" }} />
      </FormContainer>

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

export default TreeForm;
