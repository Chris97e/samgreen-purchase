import { Box, Typography } from "@material-ui/core";
import FooterButton from "components/atoms/buttons/footer-button/FooterButton";
import CardModal from "components/atoms/cards/card-modal/CardModal";
import MainContainer from "components/atoms/container/main-container/MainContainer";
import IconState from "components/atoms/Icons/icons-state/IconState";
import Logo from "components/atoms/logo/Logo";
import { stateCard } from "lang/english/stateCard";
import Check from "public/svg/components/Check";
import Close from "public/svg/components/Close";
import React, { Fragment, useState } from "react";
import { colors } from "styles/abstract/colors";
import { useStyles } from "./styleStateCard";

const StateCard = ({ marginTop = "-170px", ticket }) => {
  const classes = useStyles();
  const getCaseOfUse = (ticket) => {
    if (!ticket) {
      return stateCard?.error;
    }

    if (ticket?.status === "on-hold" || ticket?.status === "completed") {
      return stateCard?.correct;
    }

    return stateCard?.noDone;
  };
  const [content, setcontent] = useState(getCaseOfUse(ticket));

  return (
    <Fragment>
      <MainContainer>
        <Box className={classes.mainContainer} style={{ marginTop: marginTop }}>
          <CardModal>
            <Box className={classes.cardContainer}>
              <Logo />
              <IconState icon={ticket?.status === "on-hold" ? Check : Close} />
              <Typography variant="h3" color="secondary" align="center">
                {content?.title}
                <span style={{ color: colors.primary.main }}>
                  {content?.focus}
                </span>
              </Typography>
              <Typography align="center" className={classes.textContainer}>
                <strong>{`${ticket?.billing?.first_name} ${ticket?.billing?.last_name} `}</strong>
                {content?.text}
              </Typography>
            </Box>
            <FooterButton text={content?.footer} url={content?.url} />
          </CardModal>
        </Box>
      </MainContainer>
    </Fragment>
  );
};

export default StateCard;
