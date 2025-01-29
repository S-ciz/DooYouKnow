import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import { useState, useRef } from "react"
import PrimaryCard from "../Components/PrimaryCard"
import Button from "../Components/Button"
import { BlurView } from "expo-blur"



const Folder = ({ navigation }) => {

    const [modal, setModal] = useState(false)

    const containerRef = useRef(null);

    const displayModal = <View style={styles.modal}>
        <Image style={{ margin: 'auto' }} source={require('../assets/folder.png')} />
        <Text style={{ textAlign: 'center', paddingTop: 12, color: 'black', fontWeight: 'bold', fontSize: 20 }}>New folder</Text>
        <TextInput style={styles.input2} placeholder="Enter new folder" />
        <Button color={"white"} bgColor={"#2196F3"} text={"Create new folder"} />

        <TouchableOpacity onPress={toggleModal} style={styles.navItem}>
            <Image style={styles.close} source={require('../assets/Close.png')} />

        </TouchableOpacity>
    </View>

    function closeModal(e) {



    }

    function toggleModal() {

        if (modal) {
            let container = containerRef.current;

        }
        setModal(!modal)
    }

    return (
        <View ref={containerRef} onPress={closeModal} style={styles.container}>
            <View style={styles.primaryImage}>
               <Button color={'white'} bgColor={"#fd5c63"} text={"Study"}/>
               <Button color={'white'} bgColor={"#EE204D"} text={"Take Quiz"}/>
            </View>

            <BlurView intensity={12} style={styles.form}>

                <View style={styles.heading}>
                    <Text></Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Geography</Text>


                    <TouchableOpacity onPress={toggleModal} >
                        <Image source={require('../assets/Plus.png')} />

                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput placeholder="Search folder..." style={styles.input} />
                </View>

                <ScrollView>

                    <PrimaryCard navigation={navigation} />
                    <PrimaryCard navigation={navigation} />
                    <PrimaryCard navigation={navigation} />

                </ScrollView>

            </BlurView>

            {modal ? displayModal : null}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',

    },
    primaryImage:
    {
        backgroundColor: '#FD5C63',
        marginTop: -50,
        paddingBottom: 50,
        width: '100%',
        height: 400,
        justifyContent: 'center',
        justifyItems: 'center'
       

    },
    form:
    {
        height: 600,
        width: '100%',
        top: - 100,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'white',



    },
    heading:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyItems: 'center',
        padding: 25
    },
    close: {

        width: 20,
        position: "absolute",
        right: 0,
        top: 0
    },
    input:
    {
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 20,
        marginLeft: 15,
        paddingLeft: 20,
        height: 50,
        width: '90%',
        color: "black",
        fontWeight: 'bold',

    },

    input2: {
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'white',
        paddingLeft: 20,
        height: 50,
        width: '93%',
        marginLeft: 10,
        color: "black",
        fontWeight: 'bold',
    },
    navItem: {
        position: 'absolute',
        right: 12,
    },
    modal:
    {
        position: 'absolute',
        width: 300,
        top: '12%',
        left: '10%',
        backgroundColor: 'white',
        margin: 'auto',
        zIndex: 2,
        padding: 12,
        borderWidth: 3,
        borderColor: 'black'
    }

})

export default Folder;