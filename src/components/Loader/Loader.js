import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Loader.scss";

const Loader = (props) => {
  const{ isLoading, setLoading} = props
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
          
          }
          return newProgress;
        });
      }, 103.6);
    };

    simulateLoading();
  }, []);


  const renderSpanElements = () => {
    const spans = [];
    for (let i = 0; i < 10; i++) {
      spans.push(
        <span
          key={i}
          className={`${i * 10 < loadingProgress ? "active" : ""}`}
        ></span>
      );
    }
    return spans;
  };

  return (
    <div className="loader-page">
      {loadingProgress < 100 ? (
        <div className="loading-box">
          <p>&lt; SYSTEM REBOOTING &gt;</p>
          <div className="progress-per">Progress: {loadingProgress}% </div>
          <div className="logo-gif">
            <Image
              src="/images/ishivax-logo-animation.gif"
              alt="iShivax"
              width="180px"
            />
          </div>
          <div className="bar-container">
            <div className="loading-bar">{renderSpanElements()}</div>
          </div>
        </div>
      ) : (
       ""
      )}
    </div>
  );
};

export default Loader;
