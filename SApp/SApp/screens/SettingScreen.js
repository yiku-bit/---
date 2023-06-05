import React from 'react';
import { Button, View, Text ,Alert, Image,TouchableOpacity,ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../constants';
// function SettingScreen() {
//     return (
//         <View>
//             <Text>
//                 设置，修改密码、用户登出
//             </Text>
//         </View>
//     );
//   }

//   export default SettingScreen;

  class SettingScreen extends React.Component{
    static navigationOptions={
      title: 'Setting'
    }
    componentDidMount(){
      const {navigation} = this.props;
      navigation.setOptions({
        title: 'Setting' 
      });
    }

    render(){
        const {navigation} =this.props;
        const {requestBody} = this.props.route.params;
        return ( 
          <ImageBackground source={require('../images/home.png')} style={styles.background}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPwd',{requestBody: requestBody})}>
              <View style={styles.button}>
                  <Text style={styles.buttonText}>修改密码</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Welcome')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>用户登出</Text>
                </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        );
    }
}

export default SettingScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    height:50,
    width: 260,
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginVertical:20,
    marginHorizontal:10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize:15,
    padding:15,
    color: 'white'
  },
});

