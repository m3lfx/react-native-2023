import React, { useState, useCallback } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Container,
   
    Button
} from "react-native";
import { Input, VStack, Heading,Box } from "native-base"
import Icon from "react-native-vector-icons/FontAwesome"
import { useFocusEffect } from "@react-navigation/native"
import { Searchbar } from 'react-native-paper';
// import ListItem from "./ListItem"

import axios from "axios"
import baseURL from "../../assets/common/baseurl"
import AsyncStorage from '@react-native-async-storage/async-storage'
  
var { height, width } = Dimensions.get("window")

const Products = (props) => {
    const [productList, setProductList] = useState();
    const [productFilter, setProductFilter] = useState();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState();

    useFocusEffect(
        useCallback(
            () => {
                // Get Token
                AsyncStorage.getItem("jwt")
                    .then((res) => {
                        setToken(res)
                       
                    })
                    .catch((error) => console.log(error))

                axios
                    .get(`${baseURL}products`)
                    .then((res) => {
                        // console.log(res.data)
                        setProductList(res.data);
                        setProductFilter(res.data);
                        setLoading(false);
                    })

                return () => {
                    setProductList();
                    setProductFilter();
                    setLoading(true);
                }
            },
            [],
        )
    )



    return (
       <Box flex={1}>
        <Searchbar width="80%"
            placeholder="Search"
        //   onChangeText={onChangeSearch}
        //   value={searchQuery}
        />
        <FlatList 
            data={productFilter}
            renderItem={({ item, index }) => (
                <Text>{item.name}</Text>
            )}
            keyExtractor={(item) => item.id}
          />
       </Box>     
    );
}

const styles = StyleSheet.create({
    listHeader: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'gainsboro'
    },
    headerItem: {
        margin: 3,
        width: width / 6
    },
    spinner: {
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        marginBottom: 160,
        backgroundColor: 'white'
    },
    buttonContainer: {
        margin: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        marginLeft: 4,
        color: 'white'
    }
})

export default Products