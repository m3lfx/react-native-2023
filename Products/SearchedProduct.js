import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import {
    Container,
    VStack,
    Input,
    Heading,
    Text,
    Icon,
    HStack,
    Box,
    Avatar,
    Spacer,
} from "native-base";
import { FlatList } from 'react-native';

var { width } = Dimensions.get("window")

const SearchedProduct = (props) => {
    const { productsFiltered } = props;
    return (

        <Container style={{ width: width }}>
            {productsFiltered.length > 0 ? (
                // productsFiltered.map((item) => (
                //      console.log(item)


                // ))
                <Box width={80}>
                    <Heading fontSize="xl" p="4" pb="3">
                        Products
                    </Heading>
                    <FlatList data={productsFiltered} renderItem={({ item }) =>
                        <Box borderBottomWidth="1" _dark={{
                            borderColor: "muted.50"
                        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                            <HStack space={[2, 3]} justifyContent="space-between">
                                <Avatar size="48px" source={{
                                    uri: item.image ?
                                        item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                }} />
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
                        </Box>} keyExtractor={item => item._id} />
                </Box>
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center' }}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Container>

    );
};


const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    listContainer: {
        // height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
})

export default SearchedProduct;