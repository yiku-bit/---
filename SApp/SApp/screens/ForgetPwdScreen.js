import React from 'react';
import { Button, View, Text ,Alert, Image,TextInput} from 'react-native';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'


  class ForgetPwdScreen extends React.Component{
    static navigationOptions={
        header:null,
    }
    
    render(){
        const {navigation} =this.props;
        const {requestBody} = this.props.route.params;
        return (
            <View style={styles.container}>
              <View style={styles.container1}>
                <View style={styles.iconContainer}>
                  <Icon name="comment-dots" size={25} color={theme.colors.accent}/>
                </View>
                <View style={styles.textcontainer}>
                  <Text style={styles.text1}>短信验证</Text>
                  <Text style={styles.text1}>已发送至 +86 {requestBody.data.phoNum}</Text>
                </View>
              </View>
              <View style={styles.buttonContainer1}>
                <TouchableOpacity onPress={()=>navigation.navigate('Verify_pwd', {requestBody: requestBody})}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>继续</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          );
    }
    
}
  export default ForgetPwdScreen;

  const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      backgroundColor:theme.colors.white,
    },
    container1:{
      height:120,
      width: 350,
      alignItems: 'center',
      flexDirection:'row',
      borderWidth:2,
      borderColor:theme.colors.accent,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      marginVertical:30,
      marginHorizontal:10,
    },
    textcontainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    buttonContainer1:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    text1:{
      fontSize:15,
      color:theme.colors.black,
      marginVertical:10,
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
    iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.accent,
      marginVertical:10,
      marginHorizontal:30,
      width:60,
      height:60,
      backgroundColor:theme.colors.back,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30,
    },
  });
  