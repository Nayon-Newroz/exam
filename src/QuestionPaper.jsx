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
}));
const QuestionPaper = () => {
  const customSlider = useRef();
  const classes = useStyles();
  const [data, setData] = useState(MyData);
  const [activeSlideNo, setActiveSlideNo] = useState(0);
  const [refress, setRefress] = useState(false);
  const handleChange = (i, id) => {
    console.log("handleChange", i, id);
    let newData = (data[i].selectedOption = id);
    console.log("data", data);
    console.log("newData", newData.selectedOption);
    setRefress(!refress);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange2 = (event) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange2,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlideNo(next),
  };
  return (
    <div style={{ background: "#079992", height: "100vh" }}>
      <br />
      <h2
        style={{
          color: "#fff",
          textAlign: "center",
          margin: "0px 0px 10px 0px",
        }}
      >
        Remaining Time
      </h2>

      <Timer min={30} sec={0} />

      <Grid container spacing={1}>
        <Grid item xs={2}>
          {/* <div
            style={{ background: "#fff", padding: "25px", borderRadius: "5px" }}
          >
            <h4 style={{ color: "#079992", textAlign: "center" }}>
              Queation No:
            </h4>
          
            <Grid container columnSpacing={1}>
              {data?.map((item, i) => (
                <Grid item xs={4} key={i}>
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
          </div> */}
        </Grid>
        <Grid item xs={8}>
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
                  <div style={{ padding: "25px" }}>
                    <SyntaxHighlighter
                      language="javascript"
                      wrapLines={true}
                      style={arta}
                      customStyle={{
                        padding: "30px 20px",
                        borderRadius: "5px",
                      }}
                    >
                      {item.title}
                    </SyntaxHighlighter>
                    <Grid container spacing={2}>
                      {item.options.map((el, index) => {
                        return (
                          <Grid item xs={6} key={index}>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              style={{
                                border: "1px solid #079992",
                                padding: "10px 20px",
                                borderRadius: "10px",
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
            style={{ background: "#fff", padding: "25px", borderRadius: "5px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  className={classes.buttonStyle}
                  onClick={() => customSlider.current.slickPrev()}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  className={classes.buttonStyle}
                  onClick={() => customSlider.current.slickNext()}
                >
                  Next
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  className={classes.buttonStyle}
                  onClick={() => customSlider.current.slickNext()}
                >
                  Submit Question
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            style={{ background: "#fff", padding: "25px", borderRadius: "5px" }}
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
                <Grid item xs={4} key={i}>
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
    </div>
  );
};

export default QuestionPaper;
