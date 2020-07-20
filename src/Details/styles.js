import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #343434;
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
  ${({small, medium, large, title}) => {
    switch (true) {
      case small:
        return 'font-size: 12px';
      case medium:
        return 'font-size: 14px';
      case large:
        return 'font-size: 16px';
      case title:
        return 'font-size: 20px';

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

export const ViewTitle = styled.View`
  margin: 5px 0px;
`;
export const ViewImage = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
export const Badge = styled.View`
  width: 25px;
  height: 25px;
  margin: 10px 5px;
  border-radius: 12.5px;
  background-color: ${(props) => (props.category ? '#00ff00' : 'red')};
`;
export const BadgePayProducts = styled.View`
  width: 18px;
  height: 18px;
  margin: 10px 5px;
  border-radius: 9px;
  background-color: ${(props) => (props.color ? '#00ff00' : 'red')};
`;

export const Image = styled.Image`
  width: 98%;
  height: 100px;
  border-width: 1px;
  border-bottom-right-radius: 65px;
  border-top-left-radius: 65px;
  border-color: cyan;
`;
export const ViewProduct = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
`;

export const ViewInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ViewOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 10px;
`;
export const ViewBadge = styled.View``;
export const ViewProducts = styled.View`
  margin-right: 50px;
`;
export const ViewDay = styled.View`
  flex-direction: row;
`;
export const MiniBadge = styled.View`
  width: 8px;
  height: 8px;
  margin: 10px 5px;
  border-radius: 4px;
  background-color: ${(props) => (props.color ? '#00ff00' : 'red')};
`;
export const ViewContainerDay = styled.View`
  margin: 0px 0px;
  justify-content: center;
  align-items: center;
`;
export const Divider = styled.View`
  border-width: 0.5;
  border-color: ${(props) => (props.color ? props.color : 'gray')};
  width: 90%;
  margin: 5px 20px;
  margin-bottom: 20px;
`;

export const ContainerInfo = styled.View`
  align-items: center;
`;
export const ViewPhone = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Dot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${(props) => (props.color ? '#fff' : 'gray')};
  margin: 0px 5px;
`;
export const ViewWhatsapp = styled.View`
  flex-direction: row;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
`;

export const ViewItems = styled.View`
  flex-direction: row;
  margin: 0px 10px;
`;
export const ViewAgua = styled.View``;

export const Items = styled.View`
  flex-direction: row;
`;

export const TextItems = styled.Text`
  color: #fff;
  margin: 5px 5px;
`;
export const ItemGas = styled.View`
  flex-direction: row;
  margin: 0px 10px;
`;
