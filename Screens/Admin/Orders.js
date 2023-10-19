import React, { useCallback, useState } from "react";
import {View, Text, FlatList} from 'react-native'
import axios from 'axios'
import baseURL from "../../assets/common/baseurl"
import { useFocusEffect } from '@react-navigation/native'
import OrderCard from "../../Shared/OrderCard";
const Orders = (props) => {
    const [orderList, setOrderList] = useState()

    useFocusEffect(
        useCallback(
            () => {
                    getOrders();
                return () => {
                    setOrderList()
                }
            },[],
        )
    )
    console.log(`${baseURL}orders`)
    const getOrders = () => {
        axios.get(`${baseURL}orders`)
        .then((res) => {
            
            setOrderList(res.data)
        })
        .catch((error) => console.log(error))
    }
    console.log(orderList)
    return (
        
        <View>
            <FlatList 
                data={orderList}
                renderItem={({item}) => ( 
                    <OrderCard item={item} />
                    //  <Text>{item.shippingAddress1}</Text>
                    )
                }
                keyExtractor={(item) => item.id}    
            />
        </View>
    )
} 

export default Orders;