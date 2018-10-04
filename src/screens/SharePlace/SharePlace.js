import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
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
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>Share a Place with us</Text>
                    <View style={styles.placeholder}>
                        <Text>Image Preview</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Pick Image" onPress={()=>Alert.alert("onPress")} />
                    </View>
                    <View style={styles.placeholder}>
                        <Text>Map</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Locate Me" onPress={()=>Alert.alert("onPress")} />
                    </View>
                    <DefaultInput placeholder="Place Name" />
                    <View style={styles.button}>
                        <Button title="Share the Place!" onPress={()=>Alert.alert("onPress")} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 250
    },
    button: {
        margin: 8
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);