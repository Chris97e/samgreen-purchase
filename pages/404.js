import redirect from "nextjs-redirect";

const Redirect = redirect(process.env.HOME);
import {  CircularProgress } from "@material-ui/core";

export default function Custom404() {
  return (
    <Redirect>
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
        <CircularProgress/>
      </span>
    </Redirect>
  );
}
