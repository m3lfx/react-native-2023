import React from "react"
import { StyleSheet, Image,  View } from "react-native"

const Header = () => {
    return(
       <View>
        
            <Image
                source={require("../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 50 }}
            />
        
      
         </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 200,
    }
})

export default Header;