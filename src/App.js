import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Timer from "./Timer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import QuestionPaper from "./QuestionPaper";
const theme = createTheme({
  palette: {
    primary: {
      main: "#079992",
      contrastText: "#fff",
    },
    success: {
      main: "#78e08f",
      contrastText: "#fff",
    },
    info: {
      main: "#d1ffe3",
      contrastText: "#fff",
    },
    error: {
      main: "#F91351",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <QuestionPaper />
      </ThemeProvider>
    </div>
  );
}

export default App;
