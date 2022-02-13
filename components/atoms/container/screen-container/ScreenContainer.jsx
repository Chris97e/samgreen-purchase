import React from "react";

const ScreenContainer = (props) => {
  return (
    <span
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </span>
  );
};

export default ScreenContainer;
