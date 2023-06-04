import React from 'react';
import { Button, View, Text ,Alert, Image,TouchableOpacity,ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../constants';


// function WelcomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Welcome Screen</Text>
//         <Button title='校内模式' onPress={() => navigation.navigate('Login')}>
//         </Button>
//         <Button title='游客模式' onPress={() => navigation.navigate('UserOffCampus')}>
//         </Button>
//         <Button title='创建' onPress={() => navigation.navigate('Signup')}>   
//         </Button>
//       </View>
//     );
//   }

//   export default WelcomeScreen;

  class WelcomeScreen extends React.Component{
    static navigationOptions={
        header:null,
    }

    render(){
        const {navigation} =this.props;
        return (
          <ImageBackground source={require('../images/home.png')} style={styles.background}>
            <View style={styles.container}>
              <View>
                <Text style={styles.text1}>选择一种模式登录</Text>
              </View>
              
              <View style={styles.buttonContainer1}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>校内模式</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate('UserOffCampus')}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>游客模式</Text>
                  </View>
              </TouchableOpacity>
              </View>

              <View style={styles.buttonContainer2}>
                <Text style={styles.text3}>没有账号？</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <View style={styles.button1}>
                    <Text style={styles.buttonText1}>创建</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
            </ImageBackground>
          );
    }
}

export default WelcomeScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    //backgroundColor:theme.colors.white,
  },
  buttonContainer1:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    margin:20,
  },
  buttonContainer2:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  text1:{
    fontSize:40,
    color:theme.colors.black,
    margin:30,
  },
  text3:{
    fontSize:18,
  },
  button: {
    height:60,
    width: 220,
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginVertical:20,
    marginHorizontal:10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize:20,
    color: 'white',
    margin:15,
    justifyContent: 'center',
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
  button1:{
    height:30,
    width: 60,
    alignItems: 'center',
    backgroundColor: '#eaf9f2',
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
    color: theme.colors.main,
  },
});
