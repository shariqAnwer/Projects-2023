import { ThemeProvider, createTheme } from "@mui/material/styles";

import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000 !important",
      color: "#fff !important",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

const theme = createTheme();
const FilterListToggle = ({ options, value, selectToggle }) => {
  //value -active value
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          value={value}
          onChange={selectToggle}
          className={classes.root}
          exclusive
        >
          {options.map(({ label, value, id }) => (
            <ToggleButton className={classes.toggle} key={id} value={value}>
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
};

export default FilterListToggle;
