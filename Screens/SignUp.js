import { Image, StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '../Components/Button';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.graphics}>
        <Image style={styles.img} source={require('../assets/signup.jpg')} />
      </View>
      <View style={styles.form}>
        <Text style={styles.header}>Create your account</Text>
        <TextInput style={styles.input} placeholder='Enter cell number...' />
        <TextInput style={styles.input} placeholder='Enter password...' />


        {/* buttons for form submission} */}

        <Button bgColor="#1759A8" color="white" text="Create account" />
        <View style={styles.additions}>
          <Text style={{ width: 80, backgroundColor: '#ccc', height: 2, marginTop: 8 }}> </Text>
          <Text style={{ color: "grey" }}>Already have an account? </Text>
          <Text style={{ width: 80, backgroundColor: '#ccc', height: 2, marginTop: 8 }}> </Text>
        </View>
          <Button onPress={()=> navigation.navigate('SignIn')} bgColor="#113D7E" color="white" text="Sign in" />
      
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#536DFE",
    color: 'white',
    marginTop: 30,
  },

  additions:
  {
    flexDirection: 'row',
    gap: 10,
    width: '90%',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 20

  },

  graphics:
  {

  },
  img: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
  },
  header:
  {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    fontSize: 24,
    color: '#333',
  },
  form: {

    height: 500,
    backgroundColor: 'white',
    marginTop: -100,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
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

});
