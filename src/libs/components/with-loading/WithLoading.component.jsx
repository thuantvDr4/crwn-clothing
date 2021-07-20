import React from "react";
import "./WithLoading.styles.scss";
import Lottie from "react-lottie";
import * as loading from "../../../assets/loading.json";

const WithLoading = ({ isLoading, wrapedComponent }) => {
  const defaultOptions = {
    loop: isLoading,
    autoplay: isLoading,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <Lottie
            options={defaultOptions}
            speed={1.5}
            height={200}
            width={200}
            isStopped={!isLoading}
            isPaused={!isLoading}
          />
        </div>
      ) : (
        <wrapedComponent />
      )}
    </div>
  );
};

export default WithLoading;
