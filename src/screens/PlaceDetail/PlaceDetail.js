import React,{Component} from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
//import { Icon } from 'react-native-elements';
//<Icon name="delete" color="#CC0000" />
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index'

//import Icon from "react-native-vector-icons/Ionicons";


class placeDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }
  placeClosedHandler = () => {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              Insert Icon Here
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={this.placeClosedHandler} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null,mapDispatchToProps)(placeDetail);