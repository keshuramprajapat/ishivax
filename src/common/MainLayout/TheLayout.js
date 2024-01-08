import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function TheLayout() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const simulateContentLoading = () => {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress === 100) {
            clearInterval(interval);
            setLoading(true);
            setTimeout(() => {
              setAddPageLoadClass(true);
            }, 1000);
            // setLoading(true);
          }
          return newProgress;
        });
      }, 103.6);
    };

    simulateContentLoading();
  }, []);

  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isLoading]);

  const [addPageLoadClass, setAddPageLoadClass] = useState(false);

  return (
    <>
      {loadingProgress < 100 ? (
        <Loader isLoading={isLoading} setLoading={setLoading} />
      ) : isLoading ? (
        <div
          // className="ishivax-custom-header page-load-before-header"
          className={`ishivax-custom-header ${
            addPageLoadClass
              ? "page-load-before-header logo-animation-start"
              : "page-load-before-header"
          }`}
          id="header"
        >
          <div className="logo">
            <Link to="/">
              <Image src="/images/logo.png" alt="IShivax" />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="main_content_section">
            <Outlet />
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}

export default TheLayout;
