import React from 'react'

import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    Button
} from 'react-native'
import * as actions from '../Redux/Actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'
import Toast from 'react-native-toast-message'

var { width, } = Dimensions.get("window")
const ProductCard = (props) => {
    const { name, price, image, countInStock } = props;
    const dispatch = useDispatch()
   
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={{
                    uri: image ?
                        image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }}
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                    + '...' : name
                }
            </Text>
            <Text style={styles.price}>${price}</Text>

            {countInStock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <Button
                        title={'Add'}
                        color={'green'}
                        onPress={() => {
                            dispatch(actions.addToCart({...props, quantity: 1, })), Toast.show({
                                topOffset: 60,
                                type: "success",
                                text1: `${name} added to Cart`,
                                text2: "Go to your cart to complete order"
                            })
                        }} 
                    > </Button>
                </View>
            ) : <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 2 + 30,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})


export default ProductCard