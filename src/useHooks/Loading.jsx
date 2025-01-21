import React, { useState } from "react";
import Loader from "../Components/pages/Loader";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    if (isLoading) {
      return <Loader />;
    } else return;
  };
  return { isLoading, setIsLoading, handleLoading };
};

export default Loading;
