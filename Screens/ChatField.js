import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LeftMessage, RightMessage } from '../Components/Message';



const ChatField = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerImg}>
          <TouchableOpacity onPress={() => navigation.navigate('Chats')}>
            <Image source={require('../assets/Left.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={require('../assets/person.webp')} />
          </TouchableOpacity>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adam Chiloviko</Text>
            <Text style={{color: 'grey', fontSize: 12}}>Online</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/Share.png')} />
        </TouchableOpacity>

      </View>

      <ScrollView style={styles.chatField}>
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
        <LeftMessage text={"Hi fam Been a minute amigo long time no see, how you keeping up"} />
        <RightMessage text={"Been a minute amigo long time no see, how you keeping up"} />
      </ScrollView>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Type a message" style={styles.textInput} />
        <TouchableOpacity>
          <Image source={require('../assets/PaperPlane.png')} style={{ zIndex: 8, width: 30, height: 30, position: 'absolute', right: 20, bottom: 20, top: 25 }} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    columnGap: 12,
    justifyContent: 'space-between'

  },
  textInput:
  {
    width: '80%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 18,
    margin: 10,
  },
  chatField: {
    position: 'absolute',
    top: 140,
    bottom: Dimensions.get('window').height / 10,
    left: 0,
    right: 0,
    padding: 12
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 12,
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  },
  headerImg:
  {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    columnGap: 5
  }

});

export default ChatField;