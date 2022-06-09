import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    background: "#079992",
    minHeight: "100vh",
    padding: "20px 20px",
    boxSizing: "border-box",
    [theme.breakpoints.down("xl")]: {
      padding: "10px",
    },
  },
}));

const Timer = ({ min, sec, setOtpTimeOut, timeOutFunction }) => {
  // const {initialMinute = 0,initialSeconds = 0} = props;
  const classes = useStyles();
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        timeOutFunction();
        setOtpTimeOut(true);
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <div
          style={{
            marginBottom: "15px",
            fontSize: "24px",
            letterSpacing: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              // background: "#ddd",
              borderRight: "1px solid",
              padding: "0 30px",
              color: "#f9f9f9",
            }}
          >
            {minutes < 10 ? `0${minutes}` : minutes}
            <p style={{ margin: "5px", fontSize: "8px", letterSpacing: "1px" }}>
              Minutes
            </p>
          </div>
          <div style={{ padding: "0 30px", color: "#f9f9f9" }}>
            {seconds < 10 ? `0${seconds}` : seconds}
            <p style={{ margin: "5px", fontSize: "8px", letterSpacing: "1px" }}>
              Seconds
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
