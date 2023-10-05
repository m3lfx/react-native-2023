import React from 'react'
import { TouchableOpacity, View, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
var { width } = Dimensions.get("window")
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    const { item } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{ width: '50%' }}
            // onPress={() => props.navigation.navigate("Product Detail", { item: item })
            // }
            onPress={() => navigation.navigate("Product Detail", { item: item })
            }
        >
            <View style={{ width: width / 2, backgroundColor: 'gainsboro' }}>
                <ProductCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default ProductList