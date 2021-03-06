import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet, Image, ImageBackground } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backgroundImage from "../../assets/background3.jpg";
import logo from "../../assets/thprdLogo2.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}> 
      <View style={styles.container}>
          
          <Image 
          source={logo} 
          style={styles.logoContainer}
        />
          
          <MainText>
              <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground color="#005ead">Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
              <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
              <DefaultInput placeholder="Password" style={styles.input}/>
              <DefaultInput placeholder="Confirm Password" style={styles.input}/>
          </View>
          <ButtonWithBackground color="#005ead" onPress={this.loginHandler}>Submit</ButtonWithBackground> 
          
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
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
  logoContainer: {
    width:"100%", 
    resizeMode: "contain",
    opacity: .9
  }
});

export default AuthScreen;