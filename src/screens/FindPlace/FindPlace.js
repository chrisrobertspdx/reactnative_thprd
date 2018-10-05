import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
/*
import QRCode from 'react-native-qrcode';
        <Text style={{fontSize:30,margin:8}}>Chris Roberts</Text>
        <QRCode
          value={"150292"}
          size={300}
          bgColor='black'
          fgColor='white'/>
*/

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen2",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  };

  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
