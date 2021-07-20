import React from "react";

const WithHOComponent = (WrapedComponent, isLoading) => {
  const HigherComponent = (props) => {
    const Loading = () => {
      return <div>Loading...</div>;
    };

    if (isLoading) {
      return <div>{Loading()}</div>;
    }
    //
    return <WrapedComponent {...props} />;
  };
  return HigherComponent;
};

export default WithHOComponent;
