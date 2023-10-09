import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighLight,
    TouchableOpacity,
    Dimensions,
    Button,
    Modal
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import { useFocusEffect, useNavigation } from "@react-navigation/native"


var { width } = Dimensions.get("window");

const ListItem = ({item, index}) => {
    const navigation = useNavigation()
    console.log("category", item.category)
    return(
        <View>
            <TouchableOpacity
                style={[styles.container, {
                    backgroundColor: index % 2 == 0 ? "white" : "gainsboro"
                }]}
            >
                <Image 
                    source={{
                        uri: item.image
                        ? item.image
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }}
                    resizeMode="contain"
                    style={styles.image}
                />
                <Text style={styles.item}>{item.brand}</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                {/* {(item.category.name !== null) ? <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">{item.category.name}</Text> : null} */}
                <Text style={styles.item}>$ {item.price}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        width: width
    },
    image: {
        borderRadius: 50,
        width: width / 6,
        height: 20,
        margin: 2
    },
    item: {
        flexWrap: "wrap",
        margin: 3,
        width: width / 6
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold"
    }
})

export default ListItem