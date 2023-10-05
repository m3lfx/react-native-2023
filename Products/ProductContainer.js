import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import { Container, VStack, Input, Heading, Text, Icon, NativeBaseProvider, extendTheme, SmallCloseIcon, Center, ScrollView } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductList from './ProductList'
import SearchedProduct from "./SearchedProduct";
import Banner from "../Shared/Banner";
import CategoryFilter from "./CategoryFilter";

const data = require('../assets/data/products.json')
const productCategories = require('../assets/data/categories.json')
var { width, height } = Dimensions.get("window")

const ProductContainer = () => {

  const [products, setProducts] = useState([])

  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState([]);
  const [initialState, setInitialState] = useState([])
  const [productsCtg, setProductsCtg] = useState([])

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setActive(-1)
    setInitialState(data);
    setProductsCtg(data);
    setCategories(productCategories)
    return () => {
      setProducts([])
      setProductsFiltered([]);
      setFocus(false);
      setCategories([])
      setActive()
      setInitialState();
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

  const changeCtg = (ctg) => {

    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
          setProductsCtg(
            products.filter((i) => i.category.$oid === ctg),
            setActive(true)
          ),
        ];
    }
  };

  return (
    // <NativeBaseProvider theme={theme}>
    <Center>
        <VStack w="100%" space={5} alignSelf="center">
          {/* <Heading fontSize="lg">Search</Heading> */}
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
            productsFiltered={productsFiltered}
          />
        ) : (
          <ScrollView>

            <View  >
              <View>
                <Banner />
              </View>
              <View>
                <CategoryFilter
                  categories={categories}
                  categoryFilter={changeCtg}
                  productsCtg={productsCtg}
                  active={active}
                  setActive={setActive}
                />
              </View>

              {productsCtg.length > 0 ? (
                <View style={styles.listContainer}>
                  {productsCtg.map((item) => {
                    return (
                      <ProductList
                        // navigation={props.navigation}
                        key={item._id.$oid}
                        item={item}
                      />
                    )
                  })}
                </View>
              ) : (
                <View style={[styles.center, { height: height / 2 }]}>
                  <Text>No products found</Text>
                </View>
              )}
            </View>
          </ScrollView>)}

     
    </Center>
    // </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    //   height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default ProductContainer