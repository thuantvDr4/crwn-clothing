import React from "react";
import "./WrapComponent.styles.scss";
import Lottie from "react-lottie";
import * as loading from "../../../assets/loading.json";

const WrapComponent = ({ isLoading, children, className }, props) => {
  const defaultOptions = {
    loop: isLoading,
    autoplay: isLoading,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return isLoading ? (
    <div className="loading">
      <Lottie
        options={defaultOptions}
        speed={1.5}
        height={180}
        width={180}
        isStopped={!isLoading}
        isPaused={!isLoading}
      />
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

export default WrapComponent;
