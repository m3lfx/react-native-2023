import React, {useState} from 'react'
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, HStack, VStack, Avatar, Spacer, Center } from "native-base";

import * as actions from "../../../Redux/Actions/cartActions";
import Icon from 'react-native-vector-icons/FontAwesome'

var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
const confirm = props.route.params;
console.log(confirm)
    return (
        <Center width={"90%"}>
        <Text style={styles.title}>items</Text>
              
              {confirm ? confirm.order.order.orderItems.map((item) => {
                return (
                    // console.log(x)
                    <HStack space={[2, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{
                        uri: item.image ? 
                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }} 
                    />
                    <VStack>
                        <Text _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" bold>
                        {item.name}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                    }}>
                        {item.description}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start">
                                {item.price}
                    </Text>
                    </HStack>
                )
              }): null}           
            </Center>

    )
}

const styles = StyleSheet.create({
    container: {
      height: height,
      padding: 8,
      alignContent: "center",
      backgroundColor: "white",
    },
    titleContainer: {
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
    },
    title: {
      alignSelf: "center",
      margin: 8,
      fontSize: 16,
      fontWeight: "bold",
    },
    listItem: {
      alignItems: "center",
      backgroundColor: "white",
      justifyContent: "center",
      width: width / 1.2,
    },
    body: {
      margin: 10,
      alignItems: "center",
      flexDirection: "row",
    },
  });
export default Confirm;