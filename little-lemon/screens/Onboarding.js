import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import { validateEmail,validateName  } from "../util";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoarding= () => {
  const [name, setName] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');

  const isEmailValid = validateEmail(email);
  const isNameValid = validateName(name);


const onBoardUpdate = async () => {
    await AsyncStorage.setItem("isOnboardingCompleted", true);
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("email", email);
  };


  return (
    <SafeAreaView>
    <View>
    <Image
          style={styles.logo}
          source={require("../img/littleLemonLogo.png")}
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
    </View>    
    <Text >Let us get to know you</Text>
    <Text style={styles.text}>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
    <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
    <Button
        title="Next"
        disabled={ !isNameValid || !isEmailValid}
        onPress={onBoardUpdate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 24,
    // fontFamily: "Karla-ExtraBold",
    color: "#495E57",
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
});

export default OnBoarding;