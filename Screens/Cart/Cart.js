import React from 'react'
import { View, Dimensions, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import * as actions from '../../Redux/Actions/cartActions'
import {
    Container,
    Text,
    Box,
    HStack,
    Avatar,
    VStack,
    Spacer,
    Divider,
    Center,
    Button,
    Heading,

} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from "react-native-vector-icons/FontAwesome";
import EasyButton from "../../Shared/StyledComponents/EasyButton"


var { height, width } = Dimensions.get("window");

const Cart = (props) => {
    const navigation = useNavigation()
    var total = 0;
    const cartItems = useSelector(state => state.cartItems)
    cartItems.forEach(cart => {
        return (total += cart.price)
    });
    dispatch = useDispatch()
    const renderItem = ({ item, index }) =>
        <TouchableHighlight onPress={() => console.log('You touched me')} _dark={{
            bg: 'coolGray.800'
        }} _light={{
            bg: 'white'
        }}
        >
            <Box pl="4" pr="5" py="2" bg="white">
                <HStack alignItems="center" space={3}>
                    <Avatar size="48px" source={{
                        uri: item.image ?
                            item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                    }} />
                    <VStack>
                        <Text color="coolGray.800" _dark={{
                            color: 'warmGray.50'
                        }} bold>
                            {item.name}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" color="coolGray.800" _dark={{
                        color: 'warmGray.50'
                    }} alignSelf="flex-start">
                        $ {item.price}
                    </Text>
                </HStack>
            </Box>
        </TouchableHighlight>;


    const renderHiddenItem = (cartItems) =>
        <TouchableOpacity
            onPress={() => dispatch(actions.removeFromCart(cartItems.item))}
        >
            {/* <View style={styles.hiddenContainer}  > */}
            {/* <Center style={styles.hiddenContainer}> */}
            <VStack alignItems="center" style={styles.hiddenButton} >
                <View >
                    <Icon name="trash" color={"white"} size={30} bg="red" />
                    <Text color="white" fontSize="xs" fontWeight="medium">
                        Delete
                    </Text>
                </View>
            </VStack>
            {/* </Center> */}
            {/* </View> */}
        </TouchableOpacity>;

    // console.log(cartItems)

    return (

        <>
            {cartItems.length > 0 ? (
                <Box bg="white" safeArea flex="1" width="100%" >
                    <SwipeListView
                        data={cartItems}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        disableRightSwipe={true}
                        leftOpenValue={75}
                        rightOpenValue={-150}
                        previewOpenValue={-100}
                        previewOpenDelay={3000}
                    />
                </Box>
            ) : (
                <Box style={styles.emptyContainer}>
                    <Text >No items in cart
                    </Text>
                </Box>
            )}
            <VStack style={styles.bottomContainer} w='100%' justifyContent='space-between'
            >
                <HStack justifyContent="space-between">
                    <Text style={styles.price}>$ {total.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <EasyButton
                        danger
                        medium
                        alignItems="center"
                        onPress={() => dispatch(actions.clearCart())} ><Text style={{ color: 'white' }}>Clear</Text></EasyButton>
                </HStack>
                <HStack justifyContent="space-between">
                    {/* <Button alignItems="center" colorScheme="primary">Check Out</Button> */}
                    {/* <Button alignItems="center" colorScheme="primary" onPress={() => navigation.navigate('Checkout')}>Check Out</Button> */}
                    <EasyButton secondary
                        medium alignItems="center" colorScheme="primary" onPress={() => navigation.navigate('Checkout')}><Text style={{ color: 'white' }}>Checkout</Text></EasyButton>

                </HStack>
            </VStack>
        </>

    );
}
const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: "center",
        justifyContent: "center",
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
        flexDirection: 'row',
        // width: 'lg'
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
{/* <Container style={{ width: width }}> */ }
{/* {cartItems.length > 0 ? (
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
                )} */}

{/* </Container> */ }
{/* <VStack style={styles.bottomContainer} w='100%' justifyContent='space-between' >
                <HStack justifyContent="space-between">
                    <Text style={styles.price}>$ {total.toFixed(2)}</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <Button alignItems="center" onPress={() => dispatch(actions.clearCart())}> Clear</Button>
                </HStack>
                <HStack justifyContent="space-between">
                    <Button alignItems="center" colorScheme="primary">Check Out</Button>
                </HStack>
            </VStack> */}

// const styles = StyleSheet.create({
//     emptyContainer: {
//         height: height,
//         alignItems: "center",
//         // justifyContent: "center",
//         // flex: 1
//     },
//     bottomContainer: {
//         flexDirection: 'row',
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         backgroundColor: 'white',
//         elevation: 20
//     },
//     price: {
//         fontSize: 18,
//         margin: 20,
//         color: 'red'
//     },
//     hiddenContainer: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         flexDirection: 'row'
//     },
//     hiddenButton: {
//         backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//         paddingRight: 25,
//         height: 70,
//         width: width / 1.2
//     }
// });
