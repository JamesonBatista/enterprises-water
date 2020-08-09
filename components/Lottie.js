import React from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

const Animation = styled(LottieView)`
  margin: 0px 2px;
`;

const Lottie = ({animation}) => {
  return <Animation source={animation} autoPlay loop />;
};

export default Lottie;
