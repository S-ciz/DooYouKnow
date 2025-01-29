import { TouchableOpacity, Text } from "react-native";

const Button = ({ bgColor, color, text, onPress}) => {
  return (

    <TouchableOpacity onPress={onPress}>
      <Text style={{
        backgroundColor: bgColor,
        borderRadius: 5,
        color: color,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 50,
        marginBottom: 12,
        width: '90%',
        marginLeft: 15,
      }}>{text} </Text>
    </TouchableOpacity>
  );
}

export default Button