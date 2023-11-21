import * as React from "react";
import {SafeAreaView, StyleSheet, TextInput, View,Image,Text,Button,ScrollView} from 'react-native';
import { validateEmail,validateName  } from "../util";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import {useEffect} from 'react';

const OnBoarding=  ({ navigation }) => {
  const [name, setName] = React.useState(' ');
  const [email, setEmail] = React.useState(' ');
  const [allValid, setAllValid] = React.useState(false);

const onBoardUpdate = async () => {
    await AsyncStorage.setItem("isOnboardingCompleted", "true");
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("email", email);

    navigation.navigate('Home');
  };

  useEffect(() => {

   if(validateEmail(email) && validateName(name))
   {
    setAllValid(true);
   }

  }, [email, name]);


  return (
    <SafeAreaView style={styles.container} ke>
    <View style={styles.header}>
    <Image
          style={styles.logo}
          source={require("../img/logo.png")}
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
    </View>    
    <Text style={styles.welcomeText} >Let us get to know you</Text>
    <ScrollView style={styles.viewScroll}>

    <Text style={styles.text}>First Name</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={setName}
        value={name}
      />
    <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.inputBox}
        onChangeText={setEmail}
        value={email}
      />
    <Button
        title="Next"
        disabled={!allValid}
        onPress={onBoardUpdate}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#dee3e9",
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: "contain",
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 40,
    paddingVertical: 60,
    color: "#495E57",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#495E57",
  },
  inputBox: {
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    alignSelf: "stretch",
    height: 50,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
  },
  btn: {
    backgroundColor: "#f4ce14",
    borderColor: "#f4ce14",
    borderRadius: 9,
    alignSelf: "stretch",
    marginHorizontal: 18,
    marginBottom: 60,
    padding: 10,
    borderWidth: 1,
  },
  btnDisabled: {
    backgroundColor: "#f1f4f7",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 18,
    marginBottom: 60,
  },
  halfBtn: {
    flex: 1,
    borderColor: "#f4ce14",
    backgroundColor: "#f4ce14",
    borderRadius: 9,
    alignSelf: "stretch",
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
  },
  btntext: {
    fontSize: 22,
    color: "#333",
    alignSelf: "center",
  },
  pageIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  pageDot: {
    backgroundColor: "#67788a",
    width: 22,
    height: 22,
    marginHorizontal: 10,
    borderRadius: 11,
  },
  pageDotActive: {
    backgroundColor: "#f4ce14",
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});

export default OnBoarding;