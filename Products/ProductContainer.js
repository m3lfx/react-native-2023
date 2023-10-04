import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { Container, VStack, Input, Heading, Text, Icon, NativeBaseProvider, extendTheme, SmallCloseIcon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductList from './ProductList'
import SearchedProduct from "./SearchedProduct";
import Banner from "../Shared/Banner";

const data = require('../assets/data/products.json')
var { width, height } = Dimensions.get("window")

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });


const ProductContainer = () => {

  const [products, setProducts] = useState([])

  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    return () => {
      setProducts([])
      setProductsFiltered([]);
      setFocus(false);
    }
  }, [])

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    )
  }
  const openList = () => {
    setFocus(true);
  }

  const onBlur = () => {
    setFocus(false);
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Container>
        {/* <Header searchbar rounded >
              <Item>
                  <SearchIcon />
                  <Input placeholder="search" />
              </Item>
          </Header> */}
        <VStack w="100%" space={5} alignSelf="center">
          <Heading fontSize="lg">Search</Heading>
          <Input
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1" px="2"
            InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
            InputRightElement={focus == true ? <SmallCloseIcon onPress={onBlur} /> : null}
          />
        </VStack>
        {focus === true ? (
                <SearchedProduct 
                    productsFiltered = {productsFiltered}
                />
            ) : (

          <View style={styles.listContainer} >
            <Banner />
            <FlatList
              //    horizontal
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              numColumns={2}
              data={products}
              renderItem={({ item }) => <ProductList key={item.id} item={item} />}
              keyExtractor={item => item.name}
            />
          </View>)}
      
      </Container>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductContainer