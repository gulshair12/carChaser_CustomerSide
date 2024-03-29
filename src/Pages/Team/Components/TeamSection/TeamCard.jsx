import React from "react";
import "./teamcard.css";

const TeamCard = ({ title, subtitle, image }) => {
  return (
    <>
      <div className="teamcard text-center">
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="269.383"
            height="292.888"
            viewBox="0 0 269.383 292.888"
          >
            <defs>
              <clipPath id="clip-path">
                <path d="M118.068,17.107A50.5,50.5,0,0,1,144.049,10a62.891,62.891,0,0,1,35.418,10.719l67.224,39.263s24.816,15.845,24.816,40.428v87.962s2.447,30.175-25.981,47.535c-28.428,17.476-75.5,42.758-75.5,42.758s-22.719,17.942-61.282-7.107l-60.23-34.371S20.2,223.206,20.2,189.652V101.69s-1.981-26.214,30.641-45.2Z" />
              </clipPath>
            </defs>
            <g>
              <image
                clipPath="url(#clip-path)"
                xlinkHref={image}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </div>
        <div className="text-center">
          <h3 style={{ color: "#101010" }}>{title}</h3>
          <p style={{ color: "#3D3D3D" }}>{subtitle}</p>
        </div>
        <div className="d-flex justify-content-center">
          <img src="./LinkdIn.svg" alt="LinkdIn_icon" />
          <img src="./xIcon.svg" alt="X_icon" />
          <img src="./fbIcon.svg" alt="facebook_icon" />
        </div>
      </div>
    </>
  );
};

export default TeamCard;
