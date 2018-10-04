import { Navigation } from 'react-native-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: require('../../assets/mapIcon.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: require('../../assets/menuIcon100.png'),
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: require('../../assets/shareIcon.png'),
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: require('../../assets/menuIcon100.png'),
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            }
        });

};

export default startTabs;