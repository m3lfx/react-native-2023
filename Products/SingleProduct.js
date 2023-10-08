import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, ScrollView, } from "react-native";
import { Left, Right, Container, H1, Center, Button } from 'native-base'
import { useDispatch } from 'react-redux'
import * as actions from '../Redux/Actions/cartActions'
import Toast from "react-native-toast-message";

const SingleProduct = ({ route }) => {
    const [item, setItem] = useState(route.params.item);
    console.log(item)
    const [availability, setAvailability] = useState('')
    const dispatch = useDispatch()

    return (
        <Center flexGrow={1}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View>
                    {/* <Text>{item.name}</Text> */}
                    <Image
                        source={{
                            uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Button size="sm" onPress={() => {
                        dispatch(actions.addToCart({...item, quantity: 1, })),
                            Toast.show({
                                topOffset: 60,
                                type: "success",
                                text1: `${item.name} added to Cart`,
                                text2: "Go to your cart to complete order"
                            })
                    }}>Add</Button>

                </View>
            </ScrollView>

        </Center>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',

    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})

export default SingleProduct
