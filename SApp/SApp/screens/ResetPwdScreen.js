import React from 'react';
import { Button, View, Text ,Alert, Image,StyleSheet,TextInput} from 'react-native';
import { theme } from '../constants';
import { TouchableOpacity } from 'react-native';

class ResetPwdScreen extends React.Component{
    static navigationOptions={
        header:null,
    }

    render(){
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Changepwd')}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>旧密码修改</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate('ForgetPwd')}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>手机验证码修改</Text>
                  </View>
              </TouchableOpacity>
              </View>
        );
    }
}

export default ResetPwdScreen;

const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    container1:{
      alignItems: 'center',
      justifyContent: 'center',
      width:350,
      margin:20,
    },
    container2:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      margin:10,
    },
    buttonContainer1:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    text1:{
      fontSize:30,
      color:theme.colors.black,
    },
    text2:{
      fontSize:17,
      width:75,
      textAlign:'center',
    },
    button: {
      height:50,
      width: 280,
      alignItems: 'center',
      backgroundColor: theme.colors.accent,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      marginVertical:10,
      marginHorizontal:10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize:15,
      padding:15,
      color: 'white'
    },
    button1:{
      height:30,
      width: 90,
      alignItems: 'center',
      backgroundColor: 'mistyrose',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10,
      marginVertical:20,
      marginHorizontal:10,
    },
    buttonText1: {
      textAlign: 'center',
      fontSize:15,
      padding:5,
      color: theme.colors.accent,
    },
    input: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.gray,
      borderRadius: theme.sizes.radius,
      fontSize: theme.sizes.font,
      fontWeight: "500",
      color: theme.colors.black,
      height: theme.sizes.base * 3,
      width:200
    },
    textInputContainer:{
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.gray2,
      backgroundColor:theme.colors.gray2,
      borderRadius: theme.sizes.radius,
      height: 50,
      width:300,
      flexDirection:'row',
      marginVertical:10,
      marginHorizontal:10,
    },
    iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.gray,
      marginVertical:10,
      marginHorizontal:10,
    }
  });