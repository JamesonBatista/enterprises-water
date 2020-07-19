import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen/index';
import DetailsScreen from './src/Details/index';
import LeftIcon from './src/LeftIcon/LeftIcon';
import Enterprises from './src/Enterprises/index';
import {View, Image} from 'react-native';

const Stack = createStackNavigator();
console.disableYellowBox = true;
export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000);
  }, []);
  if (splash) {
    return (
      <View>
        <Image
          source={require('./assets/splash.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Solicite seu cadastro ... ',
            headerRight: () => <LeftIcon />,
            headerStyle: {
              backgroundColor: '#343434',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              flexGrow: 1,
              // alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Informações ',

            headerStyle: {
              backgroundColor: '#343434',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              flexGrow: 1,
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Enterprises"
          component={Enterprises}
          options={{
            title: 'Cadastro de Empresass ',

            headerStyle: {
              backgroundColor: '#343434',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              flexGrow: 1,
              alignSelf: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const TabBarIconContainer = styled.View`
//   background-color: ${(props) => (props.focused ? "cyan" : "#343434")};
//   padding: 2px 18px;
//   border-radius: 32px;
// `;
