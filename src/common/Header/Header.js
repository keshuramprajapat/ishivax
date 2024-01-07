import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Header.scss";

function SidebarHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [isNavOpen]);
  return (
    <>
      <div className="ishivax-custom-header" id="header">
        <div className="logo">
          <Link to="/">
            <Image src="/images/logo.png" alt="IShivax" />
          </Link>
        </div>
        <div className="header-right-bar">
          <div className="call-icon">
            <a href="tel:+1-234-567-8900">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5607 14.5112C17.5607 14.7962 17.4974 15.0891 17.3628 15.3741C17.2282 15.6591 17.0541 15.9283 16.8245 16.1816C16.4366 16.6091 16.0091 16.9179 15.5262 17.1158C15.0512 17.3137 14.5366 17.4166 13.9824 17.4166C13.1749 17.4166 12.312 17.2266 11.4016 16.8387C10.4912 16.4508 9.58074 15.9283 8.67824 15.2712C7.76783 14.6062 6.90491 13.87 6.08158 13.0546C5.26616 12.2312 4.52991 11.3683 3.87283 10.4658C3.22366 9.56331 2.70116 8.66081 2.32116 7.76623C1.94116 6.86373 1.75116 6.00081 1.75116 5.17748C1.75116 4.63915 1.84616 4.12456 2.03616 3.64956C2.22616 3.16665 2.52699 2.72331 2.94658 2.32748C3.45324 1.82873 4.00741 1.58331 4.59324 1.58331C4.81491 1.58331 5.03658 1.63081 5.23449 1.72581C5.44033 1.82081 5.62241 1.96331 5.76491 2.16915L7.60158 4.7579C7.74408 4.95581 7.84699 5.1379 7.91824 5.31206C7.98949 5.47831 8.02908 5.64456 8.02908 5.79498C8.02908 5.98498 7.97366 6.17498 7.86283 6.35706C7.75991 6.53915 7.60949 6.72915 7.41949 6.91915L6.81783 7.54456C6.73074 7.63165 6.69116 7.73456 6.69116 7.86123C6.69116 7.92456 6.69908 7.97998 6.71491 8.04331C6.73866 8.10665 6.76241 8.15415 6.77824 8.20165C6.92074 8.4629 7.16616 8.80331 7.51449 9.21498C7.87074 9.62665 8.25074 10.0462 8.66241 10.4658C9.08991 10.8854 9.50158 11.2733 9.92116 11.6296C10.3328 11.9779 10.6732 12.2154 10.9424 12.3579C10.982 12.3737 11.0295 12.3975 11.0849 12.4212C11.1482 12.445 11.2116 12.4529 11.2828 12.4529C11.4174 12.4529 11.5203 12.4054 11.6074 12.3183L12.2091 11.7246C12.407 11.5266 12.597 11.3762 12.7791 11.2812C12.9612 11.1704 13.1432 11.115 13.3412 11.115C13.4916 11.115 13.6499 11.1466 13.8241 11.2179C13.9982 11.2891 14.1803 11.3921 14.3782 11.5266L16.9987 13.3871C17.2045 13.5296 17.347 13.6958 17.4341 13.8937C17.5132 14.0916 17.5607 14.2896 17.5607 14.5112Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div
            className={isNavOpen ? "toggle-btn active" : "toggle-btn"}
            onClick={toggleNavbar}
          >
            {!isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.5"
                height="21.5"
                viewBox="0 0 21.5 21.5"
              >
                <path
                  d="M5.75,21.5V20H20V5.75h1.5V21.5ZM0,15.75V0H15.75V1.5H1.5V15.75Z"
                  fill="#fff"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.061"
                height="16.06"
                viewBox="0 0 16.061 16.06"
              >
                <path
                  d="M8.03,9.091l-6.97,6.97L0,15,6.97,8.03,0,1.061,1.06,0,8.03,6.97,15,0l1.06,1.061L9.091,8.03,16.061,15,15,16.061Z"
                  fill="#fff"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className={isNavOpen ? "menuOpen active" : "menuOpen"}>
        <div className="container">
          <div className="menu-box">
            <ul className="menu-links">
              <li>
                <Link to="">HOME</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Contact US</Link>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  FACEBOOK
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  LINKEDIN
                </a>
              </li>
              <li>
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="btn"
                >
                  Get Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 211.6 75.729"
                    data-v-7ab2290a=""
                  >
                    <defs data-v-7ab2290a="">
                      <clipPath id="clippy" data-v-7ab2290a="">
                        <rect
                          x="0"
                          y={isHovered ? "0" : "-100%"}
                          width="211.6"
                          height="75.729"
                          data-v-7ab2290a=""
                          style={{
                            transition: "y 0.3s ease",
                          }}
                        ></rect>
                      </clipPath>
                    </defs>
                    <path
                      d="M472.41,2695.516h150.52v-61.339l-17.431-12.39H413.329v61.043l17.857,12.686H472.41Z"
                      transform="translate(-412.329 -2620.787)"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      data-v-7ab2290a=""
                      style={{ fill: "#000030" }}
                    ></path>
                    <g
                      clipPath="url(#clippy)"
                      className="clip"
                      data-v-7ab2290a=""
                    >
                      <path
                        d="M472.41,2695.516h150.52v-61.339l-17.431-12.39H413.329v61.043l17.857,12.686H472.41Z"
                        transform="translate(-412.329 -2620.787)"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        data-v-7ab2290a=""
                      ></path>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarHeader;
