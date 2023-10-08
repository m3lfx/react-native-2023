import React, { useState } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from '@react-navigation/native';
import { Button } from "native-base";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import Error from "../../Shared/Error";
import axios from "axios";
import baseURL from "../../assets/common/baseurl";
import Toast from "react-native-toast-message";

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigation()

    const register = () => {
        if (email === "" || name === "" || phone === "" || password === "") {
            setError("Please fill in the form correctly");
        }
        let user = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            isAdmin: false,
          };
          axios
            .post(`${baseURL}users/register`, user)
            .then((res) => {
              if (res.status == 200) {
                Toast.show({
                  topOffset: 60,
                  type: "success",
                  text1: "Registration Succeeded",
                  text2: "Please Login into your account",
                });
                setTimeout(() => {
                  props.navigation.navigate("Login");
                }, 500);
              }
            })
            .catch((error) => {
              Toast.show({
                position: 'bottom',
                bottomOffset: 20,
                type: "error",
                text1: "Something went wrong",
                text2: "Please try again",
              });
            });
    }

    return (
        <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >
            <FormContainer title={"Register"}>
                <Input
                    placeholder={"Email"}
                    name={"email"}
                    id={"email"}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input
                    placeholder={"Name"}
                    name={"name"}
                    id={"name"}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder={"Phone Number"}
                    name={"phone"}
                    id={"phone"}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                <Input
                    placeholder={"Password"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <View style={styles.buttonGroup}>
                    {error ? <Error message={error} /> : null}
                </View>
                <View>
                    <Button variant={"ghost"} onPress={() => register()}>
                        <Text style={{ color: "blue" }}>Register</Text>
                    </Button>
                </View>
                <View>
                    <Button variant={"ghost"}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{ color: "blue" }}>Back to Login</Text>
                    </Button>
                </View>
            </FormContainer>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    buttonGroup: {
        width: "80%",
        margin: 10,
        alignItems: "center",
    },
});

export default Register;
