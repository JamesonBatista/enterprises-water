import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #343434;
  align-items: center;
  flex: 1;
`;

export const Text = styled.Text`
  letter-spacing: 1px;
  margin-bottom: 5px;
  font-style: italic;
  color: ${(props) => props.color ?? 'gray'};
  ${({light, black, cyan, green}) => {
    switch (true) {
      case light:
        return 'color: #fff';
      case black:
        return 'color: #000';
      case cyan:
        return 'color: cyan';
      case green:
        return 'color: #00ff00';
      default:
        break;
    }
  }};
  ${({bold, lbold, minibold}) => {
    switch (true) {
      case bold:
        return 'font-weight: bold';

      case lbold:
        return 'font-weight: 400';

      case minibold:
        return 'font-weight: 700';
      default:
        break;
    }
  }};
  ${({small, medium, large, title, big}) => {
    switch (true) {
      case small:
        return 'font-size: 12px';
      case medium:
        return 'font-size: 14px';
      case large:
        return 'font-size: 16px';
      case title:
        return 'font-size: 20px';
      case big:
        return 'font-size: 40px';

      default:
        break;
    }
  }};
  ${({center, left, right}) => {
    switch (true) {
      case center:
        return 'text-align: center';
      case right:
        return 'text-align: right';
      default:
        return 'text-align: left';
    }
  }};
  ${({marginr10, marginl10, marginr20, marginl20}) => {
    switch (true) {
      case marginr10:
        return 'margin-right: 10px';
      case marginr20:
        return 'margin-right: 20px';
      case marginl10:
        return 'margin-left: 10px';
      case marginl20:
        return 'margin-left: 20px';
      default:
        break;
    }
  }}
`;
export const View = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ViewLottie = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
`;
export const ViewDescription = styled.View`
  margin-bottom: 20px;
`;
export const ViewEmail = styled.View`
  border-bottom-width: 1px;
  border-color: cyan;
`;
