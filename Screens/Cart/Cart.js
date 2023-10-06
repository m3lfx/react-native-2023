import React from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Left, Right, Container, H1, Center, Box, HStack, VStack, Avatar, Spacer, Button } from 'native-base'
var { height, width } = Dimensions.get("window");
const Cart = (props) => {
    var total = 0;
    const cartItems = useSelector(state => state.cartItems)
    cartItems.forEach(cart => {
        return (total += cart.price)
    });
    // console.log(cartItems)
    return (
        // <View style={{flex:1}}>
        //   {cartItems.map(item => {
        //     return(
        //       <Text key={item._id}>{item.name}</Text>
        //     )
        //   })}
        // </View>

        <Center>
            {/* <Container style={{ width: width }}> */}
                {cartItems.length > 0 ? (

                    <Box width={80}>
                        <FlatList data={cartItems} renderItem={({ item }) =>

                            <Box borderBottomWidth="1" _dark={{
                                borderColor: "muted.50"
                            }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">

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
                            </Box >
                        }
                            keyExtractor={item => item._id}
                        />
                    </Box>
                ) : (
                    <Box style={styles.emptyContainer}>
                        <Text >No items in cart
                        </Text>
                    </Box>
                )}

            {/* </Container> */}
            <VStack style={styles.bottomContainer} w='100%' justifyContent='space-between' >
                <HStack justifyContent="space-between">
                    <Text style={styles.price}>$ {total.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <Button alignItems="center"> Clear</Button>
                </HStack>
                <HStack justifyContent="space-between">
                    <Button alignItems="center" colorScheme="primary">Check Out</Button>
                </HStack>
            </VStack>
        </Center>

    );


}

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: "center",
        // justifyContent: "center",
        // flex: 1
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    },
    hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
    }
});

export default Cart