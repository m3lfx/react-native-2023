import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Products/ProductContainer';
import Header from './Shared/Header';
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Main from './Navigators/Main'
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },

};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Header />
            <Main />
            <Toast />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
