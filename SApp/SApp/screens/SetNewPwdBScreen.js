import React from 'react';
import { Button, View, Text ,Alert, Image,StyleSheet,TextInput} from 'react-native';
import { theme } from '../constants';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../components';

  class SetNewPwdBScreen extends React.Component{
    static navigationOptions={
        header:null,
    }
    state={
      newpwd:'456',
      checkpwd:'456',
    }
    handleNewpwd=(text)=>{
      this.setState({newpwd:text})
    }
    handleCheckpwd=(text)=>{
      this.setState({checkpwd:text})
    }
    setpwd() {
      const { navigation } = this.props;
      if (this.state.newpwd == this.state.checkpwd) 
      {
        // 密码校验通过
    
        // 在此处添加更新数据库的代码
    
        // 更新本地存储中的密码
        AsyncStorage.setItem('password', this.state.newpwd)
          .then(() => {
            Alert.alert('修改成功，请重新登录');
            navigation.navigate('Login');
          })
          .catch(() => {
            // 更新本地存储失败
            Alert.alert('更新密码失败，请重试');
          });
      } 
      else {
        // 密码不一致
        Alert.alert('密码不一致，请重新设置');
      }
    }

    render(){
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                  <Text style={styles.text1}>设置新密码</Text>
                </View>

                <View style={styles.buttonContainer1}>
                  <View style={styles.container2}>
                    <Text style={styles.text2}>新密码</Text>
                    <View style={styles.textInputContainer}>
                      <TextInput 
                        placeholder='请设置密码'
                        placeholderTextColor={theme.colors.gray}
                        defaultValue='456'
                        autoCapitalize='none'
                        keyboardType='default'
                        secureTextEntry={true}
                        onChangeText={this.handleNewpwd}
                      />
                    </View>
                  </View>

                  <View style={styles.container2}>
                    <Text style={styles.text2}>确认密码</Text>
                    <View style={styles.textInputContainer}>
                      <TextInput 
                        placeholder='请再次输入新密码'
                        placeholderTextColor={theme.colors.gray}
                        defaultValue='456'
                        autoCapitalize='none'
                        keyboardType='default'
                        secureTextEntry={true}
                        onChangeText={this.handleCheckpwd}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.buttonContainer1}>
                  <TouchableOpacity  onPress={()=>this.setpwd()}>
                      <View style={styles.button}>
                          <Text style={styles.buttonText}>提交</Text>
                      </View>
                  </TouchableOpacity>
                </View>

            </View>
          );
    }
}

export default SetNewPwdBScreen;


const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor:theme.colors.white,
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