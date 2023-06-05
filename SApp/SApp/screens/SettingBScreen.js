import React from 'react';
import { Button, View, Text ,Alert, Image,TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../constants';

  class SettingBScreen extends React.Component{
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
        return ( 
          <View style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.navigate('Welcome')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>用户登出</Text>
                </View>
            </TouchableOpacity>
          </View>
        );
    }
}

export default SettingBScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor:theme.colors.white,
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

