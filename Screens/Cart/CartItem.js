import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Box, HStack, Avatar, Thumbnail, Body } from "native-base";

const CartItem = (props) => {
    
    const data = props.item.item;
    console.log(data)
    return (

        <Box>
            <HStack width="100%" px={4}>
                <HStack space={2} alignItems="center">
                    <Avatar color="white" bg={'secondary.700'} size="48px" source={{
                        uri: data.product.image ?
                            data.product.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }} >
                    </Avatar>
                   <Text>{data.product.name}</Text>
                   <Text>$ {data.product.price}</Text>
                </HStack>
            </HStack>
        </Box>
       
    );
};

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default CartItem;