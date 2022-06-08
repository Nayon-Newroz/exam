import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ min, setOtpTimeOut }) => {
  // const {initialMinute = 0,initialSeconds = 0} = props;

  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
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
            marginBottom: "30px",
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
