import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
const SecondaryCard = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ChatField")} style={styles.card}>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', columnGap: 10 }}>
                <View>
                    <Image style={styles.img} source={require('../assets/person.webp')} />
                </View>
                <View>
                    <Text style={styles.name}>Stan Cizungu</Text>
                    <Text style={styles.message}>How was your day today?</Text>
                </View>
            </View>
            <View>
                <Text style={styles.number}>5</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    message: {
        color: '#333',
        fontSize: 12
    },
    number:
    {
        color: 'white',
        fontSize: 16,
        padding: 5,
        borderRadius: 50,
        textAlign: 'center',
        verticalAlign: 'center',
        alignContent: 'center',
        margin: 'auto',

        backgroundColor: '#25D366',

    },
    card: {

        flexDirection: 'row',
        margin: 'auto',
        justifyContent: 'space-between',

        alignContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        columnGap: 10,
        boxShadow:"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
    


    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
        objectFit: 'cover'
    }
})



export default SecondaryCard;