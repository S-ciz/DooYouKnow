import { View, Text,Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import SecondaryCard from '../Components/SecondaryCard';
import { ScrollView } from 'react-native-gesture-handler';

const Chats = ({navigation})=>{
return (
    <View style={{marginTop: 50}}>
        <View style={styles.nav}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}  style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}> 
            <Image source={require('../assets/Left.png')}/>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Learn</Text>
            </TouchableOpacity >
            <View style>
                <Text style={styles.ribbon}>110</Text>
               <Image source={require('../assets/Notification.png')}/> 
          </View>
            
        </View>

         <TextInput style={styles.input} placeholder='Search...' />
        
    <ScrollView style={{height: 500}}> 
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      <SecondaryCard navigation={navigation}/>
      </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    nav: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
    },
    ribbon: {
        position: 'absolute',
        top: -15,
        right: 0,
        backgroundColor: 'red',
        padding: 5,
        color: 'white',
        borderRadius: 50,
        zIndex: 12
      
    },
    input:
    {
      borderColor: "#ccc",
      borderWidth: 1,
      marginBottom: 1,
      marginLeft: 15,
      paddingLeft: 20,
      height: 50,
      width: '90%',
      color: "black",
      fontWeight: 'bold',
  
    },
})

export default Chats;