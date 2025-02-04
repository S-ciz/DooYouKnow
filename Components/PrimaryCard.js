
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native"
const PrimaryCard = ({navigation, screen})=>{

    return <TouchableOpacity onPress={()=> navigation.navigate(screen)}   style={styles.primaryCard}> 
   
        <View> 
          <Text style={styles.text}>Geography</Text>
        </View>
        <View style={styles.icons}> 
          
          <Image source={require('../assets/Share.png')}/>
          <Image source={require('../assets/Pencil.png')}/>
          <Image source={require('../assets/Trash.png')}/>
        </View>
       
    </TouchableOpacity>

}

const styles = StyleSheet.create({
    primaryCard: {
       flexDirection: 'row',
       margin: 'auto',
       justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        padding: 20,
        marginBottom: 12,
        width: '90%'
    },
    
    text: {
        color: '#333'
    },

    icons: 
    {
        flexDirection: 'row',
        columnGap: 20,
        verticalAlign: 'center'
    }
})

export default PrimaryCard;