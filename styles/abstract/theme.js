import { createTheme } from "@material-ui/core/styles";
import { colors } from "styles/abstract/colors";
import { fonts } from "styles/abstract/fonts";
import { radius } from "./radius";
import { shadow } from "./shadow";
import { size } from "./size";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const theme = createTheme({
  overrides: {
    MuiAccordion: {
      root: {
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: "0rem",
        },
      },
      rounded: {
        borderRadius: radius.teriary,
        "&:first-child": {
          borderRadius: radius.teriary,
          borderTopLeftRadius: radius.teriary,
          borderTopRightRadius: radius.teriary,
        },
        "&:last-child": {
          borderRadius: radius.teriary,
          borderBottomLeftRadius: radius.teriary,
          borderBottomRightRadius: radius.teriary,
        },
      },
    },

    MuiPaper: {
      root: {
        border: `1px solid ${colors.border.main} !important`,
      },
      rounded: {
        borderRadius: radius.quaternary,
      },
      elevation8: {
        boxShadow: shadow.tooltip,
      },

      elevation1: {
        boxShadow: shadow.inputShadow,
      },
    },

    MuiListItem: {
      root: {
        color: `${colors.secondary.main}99`,
        fontWeight: 400,
        fontFamily: fonts.primary,
        fontSize: size.inputSize,
        "&.Mui-selected": {
          backgroundColor: colors.grey.light,
          color: `${colors.secondary.main}`,
          fontWeight: 500,
        },
      },
    },

    MuiOutlinedInput: {
      input: {
        padding: "20px",
      },
      notchedOutline: {
        border: `1px solid ${colors.border.main} !important`,
        borderRadius: radius.quaternary,
      },
      root: {
        backgroundColor: "transparent",
        borderRadius: radius.quaternary,
        "&.Mui-focused .MuiInputAdornment-root": {
          color: `${colors.primary.main} !important`,
          opacity: 1,
        },
        "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
          color: `${colors.primary.main} !important`,
          opacity: 1,
        }, 
      },
    },

    MuiInputAdornment: {
      root: {
        color: colors.secondary.main,
        opacity: 0.6,
        transition:'color 200ms ease-in, opacity 200ms ease-in'
      },
    },

    MuiInput: {
      root: {
        backgroundColor: colors.white.main,
        borderRadius: radius.quaternary,
        fontFamily: fonts.primary,
      },
      input: {
        color: `${colors.secondary.main}99`,
        fontWeight: 500,
        fontFamily: fonts.primary,
        fontSize: size.inputSize,
        padding: "20px",
        borderRadius: radius.quaternary,
      },
      underline: {
        "&:before": {
          display: "none",
        },
        "&:after": {
          display: "none",
        },
      },
    },

    //Color of Placeholder Textfield
    MuiInputBase: {
      input: {
        color: `${colors.secondary.main}E6`,
        fontFamily: fonts.primary,
        fontSize: size.inputSize,
        opacity: 1,
        fontWeight: 500,
      },
      root: {
        boxShadow: shadow.inputShadow,
      },
    },

    //Form helper text (Error message of input)
    MuiFormHelperText: {
      root: {
        marginTop: "10px",
        color: "#FF2300",
      },
    },

    MuiSelect: {
      select: {
        border: `1px solid ${colors.border.main} !important`,
        borderRadius: radius.quaternary,
        boxShadow: shadow.inputShadow,
        color: `${colors.secondary.main}`,

        "&:focus": {
          borderRadius: radius.quaternary,
          backgroundColor: colors.white.main,
        },
      },
      icon: {
        right: "10px",
      },
    },

    MuiTooltip: {
      tooltip: {
        fontSize: "0.9em",
        color: `${colors.secondary.main}B3`,
        backgroundColor: colors.white.main,
        fontFamily: fonts.secondary,
        lineHeight: "23px",
        padding: "1.2rem",
        borderRadius: radius.secondary,
        fontWeight: 400,
        boxShadow: shadow.tooltip,
      },
    },
    MuiBackdrop: {
      root: {
        backdropFilter: "blur(15px)",
        backgroundColor: " rgba(0,0,0,0.7)",
      },
    },
    MuiButton: {
      textPrimary: {
        textTransform: "initial",
      },
      text: {
        padding: "10px 20px",
      },

      root: {
        backgroundColor: colors.primary.main,
        color: colors.white.light,
        fontSize: "1.1rem",
        fontWeight: "500 !important",
        fontFamily: fonts.primary,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        borderRadius: radius.main,
        "&:hover": {
          backgroundColor: colors.primary.dark,
        },
      },

      outlined: {
        backgroundColor: "transparent",
        color: colors.grey.palid,
        textTransform: "initial",
        border: `1px solid ${colors.grey.border}`,
        padding: "10px 20px",
        height: "55px",
        "&:hover": {
          backgroundColor: colors.grey.light,
          border: `1px solid ${colors.grey.border}`,
        },
      },

      contained: {
        backgroundColor: colors.primary.main,
        color: colors.white.main,
        padding: "10px 20px",
        textTransform: "none",
        boxShadow: "none",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        borderRadius: radius.main,
        height: "35px",
        minHeight: "35px",
        boxSizing: "content-box",

        "&.Mui-disabled": {
          backgroundColor: colors.primary.dark,
        },

        "&:hover": {
          backgroundColor: colors.primary.dark,
          boxShadow: "none",
        },

        "&:active": {
          backgroundColor: `${colors.primary.dark} !important`,
          
        },
      },
    },
    //--------------------------------------------------------->Typography
    MuiTypography: {
      h1: {
        fontSize: "3rem",
        fontWeight: "500",
        fontFamily: fonts.primary,
        color: colors.secondary.main,
        [breakpoints.down("xs")]: {
          fontSize: "2.5rem"
        }
      },
      h2: {
        fontSize: "2.25rem",
        fontWeight: "500",
        fontFamily: fonts.primary,
        color: colors.secondary.main,
      },
      h3: {
        fontSize: "1.9rem",
        fontWeight: "500",
        fontFamily: fonts.primary,
        color: colors.secondary.main,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: "500",
        fontFamily: fonts.primary,
        color: colors.secondary.main,
      },
      h5: {
        fontSize: "1.125rem",
        fontWeight: "500",
        fontFamily: fonts.primary,
        color: colors.secondary.main,
      },
      h6: {
        fontSize: "0.95rem",
        fontWeight: "500",
        fontFamily: fonts.primary,
        color: colors.secondary.main,
        opacity: 0.8,
      },

      body1: {
        fontSize: "1.125rem",
        fontFamily: fonts.secondary,
        fontWeight: "400",
        lineHeight: "35px",
        color: colors.secondary.main,
        opacity: 0.7,
      },
      subtitle1: {
        fontSize: "1.5rem",
        fontFamily: fonts.secondary,
        fontWeight: "400",
        color: colors.secondary.main,
        opacity: 0.5,
      },
    },
  },
  //--------------------------------------------------------->Colors
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    error: {
      main: "#rgba(255,0,0)",
    },
  },
});
export default theme;
