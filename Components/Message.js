
import {View, Text, StyleSheet} from "react-native"

export const LeftMessage = ({text})=>{
return (<View style={styles.container}>
    <View style={styles.box}> 
    <Text style={{lineHeight: 18}}>{text}</Text>
    <View style={styles.bottom}>
            <Text></Text>
            <Text style={styles.time}>12:30</Text>
         </View>
    </View>
    <View></View>
  
</View>)
}

export const RightMessage = ({text})=>{
  return (<View style= {styles.container}>
     <View></View>
    <View style={[styles.box, {backgroundColor: '#113D7E'}]}>
         <Text style={{color: 'white', lineHeight: 18}}>{text}</Text>
         <View style={styles.bottom}>
            <Text></Text>
            <Text style={styles.time}>12:30</Text>
         </View>
          </View>
  </View>)
}

const styles = StyleSheet.create({
    box: 
    {   
        maxWidth: '80%',
        width: 'auto',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        padding: 12,
        borderRadius: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 12
    },
    bottom: {
         color: 'white',
         flexDirection: 'row',
         justifyContent: 'space-between',
         marginTop: 2

         
    },
    time: {
        color: "grey",
        fontSize: 12
    }
})