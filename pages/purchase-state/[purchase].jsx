import Forest from "components/atoms/banners/forest/Forest";
import StateCard from "components/molecules/cards/state-card/StateCard";
import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import axiosStore from "utils/axios/axiosStore";

const Purchase = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Samgreen: Your order was finished</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Forest height="250px" />
      <StateCard ticket={props?.ticket}  />
    </Fragment>
  );
};

Purchase.getInitialProps = async (ctx) => {
  let ticket = null;
  const id = ctx.query.purchase;
  try {
    const res = await axiosStore.get(`${process.env.ORDERS}${id}`);
    ticket = res.data;
  } catch (err) {
    console.error(err);
  }
  return { ticket, isMultiProduct: ticket?.line_items.length > 1 };
};

export default Purchase;
