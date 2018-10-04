import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, Image, ImageBackground } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background.jpg";
import logo from "../../assets/thprdLogo2.jpg";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        
          <Image 
          source={logo} 
          style={{width:"100%", resizeMode: "contain"}}
        />
          <MainText>
              <HeadingText>Please Log In</HeadingText>
          </MainText>
          <Button title="Switch to Login" />
          <View style={styles.inputContainer}>
              <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
              <DefaultInput placeholder="Password" style={styles.input}/>
              <DefaultInput placeholder="Confirm Password" style={styles.input}/>
          </View>
          <Button title="Submit" onPress={this.loginHandler} />
        
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'white'
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
});

export default AuthScreen;