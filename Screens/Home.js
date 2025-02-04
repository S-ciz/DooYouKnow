import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const Home = ({ navigation }) => {

    const [navState, setNavState] = useState(false);

    const navBarDisplay = (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=> navigation.navigate('Folders')} style={styles.navItem}>
                <Image style={styles.navIcon} source={require('../assets/folder.png')} />
                <Text>Folder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Image style={styles.navIcon} source={require('../assets/gear.png')} />
                <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Chats')} style={styles.navItem}>
                <Image style={styles.navIcon} source={require('../assets/chats.png')} />
                <Text>Chats</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setNavState(!navState)}>
                        <Image style={{ width: 30, height: 30 }} source={require('../assets/menu.png')} />
                    </TouchableOpacity>
                    <Image style={styles.profileImg} source={require('../assets/person.webp')} />
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={[styles.welcomeText, styles.highlightedText]}>Jackson J</Text>
                </View>
                {navState && navBarDisplay}
            </View>
            <Image style={styles.img} source={require('../assets/homegirl.png')} />
            <View style={[styles.boxes, { marginTop: -90 }]}>
                <View style={[styles.box, { backgroundColor: '#FD5C63' }]}>
                    <Image style={styles.icons} source={require('../assets/card.png')} />
                    <Text style={styles.boxText}>Study Notes</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#1759A8' }]}>
                    <Image style={styles.icons} source={require('../assets/book.png')} />
                    <Text style={styles.boxText}>Take Quiz</Text>
                </View>
            </View>
            <View style={[styles.boxes, { marginTop: 10 }]}>
                <View style={[styles.box, { backgroundColor: '#536DFE' }]}>
                    <Image style={styles.icons} source={require('../assets/chat.png')} />
                    <Text style={styles.boxText}>Share Notes</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#113D7E' }]}>
                    <Image style={styles.icons} source={require('../assets/bot.png')} />
                    <Text style={styles.boxText}>QuizGen</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        width: 200,
        backgroundColor: 'white',
        position: 'absolute',
        left: 12,
        top: 0,
        padding: 10,
        zIndex: 10,
        borderRadius: 12
    },
    navItem: {
        flexDirection: 'row',
        padding: 10,
        gap: 12,
        alignItems: 'center',
    },
    navIcon: {
        width: 30,
        height: 30,
    },
    container: {
        width: "100%",
        height: 445,
        backgroundColor: "#bbdefb",
        borderBottomRightRadius: 300,
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        padding: 12,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    welcomeText: {
        fontSize: 45,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 12,
    },
    highlightedText: {
        color: 'white',
    },
    img: {
        marginTop: -40,
        alignSelf: 'center',
        width: '100%',
        height: 400,
        resizeMode: "cover",
    },
    boxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    box: {
        width: '45%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    icons: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    boxText: {
        color: 'white',
    },
});

export default Home;
