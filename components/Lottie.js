import React from "react";
import LottieView from "lottie-react-native";

const Lottie = ({ animation }) => {
  return <LottieView source={animation} autoPlay loop />;
};

export default Lottie;
