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
import MyData from "./MyData";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import KeyboardEventHandler from "react-keyboard-event-handler";
import ReportIcon from "@mui/icons-material/Report";

const useStyles = makeStyles((theme) => ({
  slickStyle: {
    "& .slick-prev": {
      display: "none !important",
    },
    "& .slick-next": {
      display: "none !important",
    },
  },
  buttonStyle: {
    "&:hover": {
      color: "#fff !important",
      background: "#079992 !important",
    },
  },
  activeStyle: {
    color: "#fff !important",
    background: "#079992 !important",
  },
  dialogButton: {
    background: "none !important",
    color: "#fff !important",
    "&:hover": {
      background: "#4fb5b0 !important",
    },
  },
  title: {
    color: "#fff",
    textAlign: "center",
    margin: "0px 0px 10px 0px",
    letterSpacing: "3px",
    fontSize: "24px",
    fontWeight: 600,
  },
  optionStyle: {
    border: "1px solid #079992",
    padding: "10px 20px",
    borderRadius: "10px",
    [theme.breakpoints.down("xl")]: {
      padding: "5px 10px",
    },
  },
  main: {
    background: "#079992",
    minHeight: "100vh",
    // padding: "10px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xl")]: {
      padding: "10px",
    },
    // "&:hover": {
    //   background: "green",
    // },
  },
  divPadding: {
    padding: "25px",
    [theme.breakpoints.down("xl")]: {
      padding: "10px 25px",
    },
  },
  DialogContentStyle: {
    minWidth: "350px !important",
    padding: "50px 24px !important",
    [theme.breakpoints.down("sm")]: {
      minWidth: "250px !important",
      padding: "30px 24px !important",
    },
  },
}));
const QuestionPaper = () => {
  const customSlider = useRef();
  const classes = useStyles();
  const [data, setData] = useState(MyData);
  const [activeSlideNo, setActiveSlideNo] = useState(0);
  const [refress, setRefress] = useState(false);
  const [open, setOpen] = useState(false);
  const [exit, setExit] = useState(false);
  const [keyboard, setKeyboard] = useState(true);
  const [checkMessage, setCheckMessage] = useState("");
  const [remainingQuestionNo, setRemainingQuestionNo] = useState([]);
  const [obtainedMarks, setObtainedMarks] = useState();

  const handleClose = () => {
    setOpen(false);
    setExit(false);
    setKeyboard(false);
  };

  const handleChange = (i, id) => {
    data[i].selectedOption = id;
    setRefress(!refress);
  };

  const handleCheckPaper = () => {
    let notAnsweredQuestionNo = [];
    data.map((item, i) => {
      if (item.selectedOption.length < 1) {
        notAnsweredQuestionNo.push(i + 1);
      }
    });
    if (notAnsweredQuestionNo.length > 0) {
      setOpen(true);
      setRemainingQuestionNo(notAnsweredQuestionNo);
    } else {
      setOpen(true);
      setCheckMessage("Would like to recheck !!!");
    }
  };

  const handleSubmit = () => {
    try {
      let totalMarks = 0;

      data.map((item, i) => {
        if (item.selectedOption === item.answerId) {
          totalMarks += 5;
        }
      });

      setObtainedMarks(totalMarks);
      setOpen(false);
      setExit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlideNo(next),
  };
  const timeOutFunction = () => {
    handleSubmit();
  };
  return (
    <div className={classes.main}>
      <KeyboardEventHandler
        handleKeys={["all"]}
        handleFocusableElements
        onKeyEvent={(key, e) => setKeyboard(true)}
      />
      <div
        style={{ height: "3px", background: "red" }}
        onMouseOver={() => setKeyboard(true)}
      ></div>
      <div style={{ padding: "0px 20px" }}>
        <p className={classes.title}>Remaining Time</p>

        <Timer min={30} sec={0} timeOutFunction={timeOutFunction} />

        <Grid container spacing={1}>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={2}></Grid>
          <Grid item xs={12} sm={8.8} md={8} lg={8} xl={8}>
            <div
              style={{ background: "#fff", borderRadius: "5px" }}
              className={classes.slickStyle}
            >
              <Slider
                {...settings}
                ref={(slider) => (customSlider.current = slider)}
              >
                {data?.map((item, i) => (
                  <div key={i}>
                    <div className={classes.divPadding}>
                      <h2 style={{ margin: 0, fontWeight: 400 }}>
                        Question No: {i + 1}
                      </h2>
                      {/* <p>Find out the output</p> */}
                      <SyntaxHighlighter
                        language="javascript"
                        wrapLines={true}
                        wrapLongLines={true}
                        style={arta}
                        customStyle={{
                          padding: "30px 20px",
                          borderRadius: "5px",
                          minHeight: "270px",
                        }}
                      >
                        {item.title}
                      </SyntaxHighlighter>
                      <Grid container spacing={2}>
                        {item.options.map((el, index) => {
                          return (
                            <Grid item xs={12} sm={6} key={index}>
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                className={classes.optionStyle}
                                style={{
                                  background:
                                    item.selectedOption === el.id
                                      ? "#079992"
                                      : "",
                                  color:
                                    item.selectedOption === el.id
                                      ? "#d1ffe3"
                                      : "",
                                }}
                                value={item.selectedOption}
                                onChange={() => handleChange(i, el.id)}
                              >
                                <FormControlLabel
                                  value={el.id}
                                  control={<Radio color="info" />}
                                  label={el.option}
                                />
                              </RadioGroup>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <br />
            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "5px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={() => customSlider.current.slickPrev()}
                  >
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={classes.buttonStyle}
                    onClick={() => customSlider.current.slickNext()}
                  >
                    Next
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    className={classes.buttonStyle}
                    onClick={handleCheckPaper}
                  >
                    Submit Question
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
            <Grid
              container
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "5px",
              }}
            >
              {/* <Grid item xs={5.5}>
              <Button
                fullWidth
                variant="outlined"
                className={classes.buttonStyle}
                onClick={() => customSlider.current.slickPrev()}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5.5}>
              <Button
                fullWidth
                variant="outlined"
                className={classes.buttonStyle}
                onClick={() => customSlider.current.slickNext()}
              >
                Next
              </Button>
            </Grid>
            <Grid item xs={12}>
              <br />
              <Button
                fullWidth
                variant="contained"
                disableElevation
                className={classes.buttonStyle}
                onClick={() => customSlider.current.slickNext()}
              >
                Submit Question
              </Button>
            </Grid> */}

              <Grid container columnSpacing={1}>
                <Grid item xs={12}>
                  <h4
                    style={{
                      color: "#079992",
                      textAlign: "center",
                      marginTop: 0,
                    }}
                  >
                    Queation No:
                  </h4>
                </Grid>
                {data?.map((item, i) => (
                  <Grid item xs={3} sm={6} md={6} lg={4} key={i}>
                    <Button
                      fullWidth
                      variant="outlined"
                      className={`${classes.buttonStyle} ${
                        activeSlideNo === i ? classes.activeStyle : ""
                      } `}
                      style={{
                        marginBottom: "10px",
                      }}
                      onClick={() => customSlider.current.slickGoTo(i)}
                    >
                      {i + 1}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className={classes.DialogContentStyle}>
            <DialogContentText
              id="alert-dialog-description"
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#888888",
                lineHeight: "40px",
              }}
            >
              {checkMessage.length > 0 ? (
                checkMessage
              ) : (
                <>
                  You haven't answered <br />
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#676767",
                      wordBreak: "break-all",
                    }}
                  >
                    {remainingQuestionNo.join(", ")}
                  </span>
                  <br /> number question
                  {remainingQuestionNo.length > 1 ? "s" : ""}.
                </>
              )}
            </DialogContentText>
          </DialogContent>

          <DialogActions
            style={{
              justifyContent: "center",
              background: "#079992",
              padding: 0,
            }}
          >
            <Button
              size="large"
              fullWidth
              onClick={handleClose}
              className={classes.dialogButton}
            >
              Continue Exam
            </Button>
            <Button
              size="large"
              fullWidth
              onClick={handleSubmit}
              autoFocus
              className={classes.dialogButton}
            >
              Confirm Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={keyboard}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className={classes.DialogContentStyle}>
            <DialogContentText
              id="alert-dialog-description"
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#888888",
                lineHeight: "50px",
              }}
            >
              <ReportIcon style={{ fontSize: "120px", color: "#f6b93b" }} />
              <br />
              1. Please, don't use keyboard.
              <br />
              2. Please, don't cross the red line with your mouse.
              <br />
              3. Please, don't use any unethical practice.
              <br />
            </DialogContentText>
          </DialogContent>

          <DialogActions
            style={{
              justifyContent: "center",
              background: "#079992",
              padding: 0,
            }}
          >
            <Button
              fullWidth
              onClick={handleClose}
              autoFocus
              className={classes.dialogButton}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={exit}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className={classes.DialogContentStyle}>
            <DialogContentText
              id="alert-dialog-description"
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#888888",
                lineHeight: "50px",
              }}
            >
              {/* {checkMessage} */}
              Your obtained marks is <br />
              <span
                style={{
                  fontSize: "50px",
                  color: "#676767",
                  wordBreak: "break-all",
                }}
              >
                {obtainedMarks}
              </span>
            </DialogContentText>
          </DialogContent>

          <DialogActions
            style={{
              justifyContent: "center",
              background: "#079992",
              padding: 0,
            }}
          >
            <Button
              fullWidth
              onClick={handleClose}
              autoFocus
              className={classes.dialogButton}
            >
              Exit Exam
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div
        style={{ height: "3px", background: "red" }}
        onMouseOver={() => setKeyboard(true)}
      ></div>
    </div>
  );
};

export default QuestionPaper;
