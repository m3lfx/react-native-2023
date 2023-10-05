import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Products/ProductContainer';
import Header from './Shared/Header';
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
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
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {/* <View style={styles.container}> */}
          <Header />
          <Main />
          {/* <ProductContainer /> */}
        {/* </View> */}
      </NativeBaseProvider>
    </NavigationContainer>
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
