import React from 'react';
import {  View ,Alert, Image,ImageBackground} from 'react-native';
import { Block,Button,Text } from '../components';
import { theme } from '../constants';
import { StyleSheet, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component{
    static navigationOptions={
        header:null,
    }

    render(){
        const {navigation} =this.props;
        return (
          <ImageBackground source={require('../images/home.png')} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.pic}/>
                <View style={styles.buttonContainer1}>
                  <TouchableOpacity  onPress={() => navigation.navigate('Welcome')}>
                      <View style={styles.button}>
                          <Text style={styles.buttonText}>继续</Text>
                      </View>
                  </TouchableOpacity>
                </View>
            </View> 
          </ImageBackground>  
              
          );
    }
}

export default HomeScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    //backgroundColor:theme.colors.white
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
  pic:{
    width: 320,
    height: 320,
    resizeMode: 'contain',
    margin:30,
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
    fontSize:30,
    color:theme.colors.black,
  },
  button: {
    height:60,
    width: 200,
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginVertical:20,
    marginHorizontal:10,
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
  buttonText: {
    textAlign: 'center',
    fontSize:20,
    color: 'white',
    margin:15,
    justifyContent: 'center',
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
