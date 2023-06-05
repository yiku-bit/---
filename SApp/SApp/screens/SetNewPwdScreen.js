import React from 'react';
import { Button, View, Text ,Alert, Image,StyleSheet,TextInput,ImageBackground} from 'react-native';
import { theme } from '../constants';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../components';

  class SetNewPwdScreen extends React.Component{
    static navigationOptions={
        header:null,
    }
    state={
      newpwd:'',
      checkpwd:'',
    }
    handleNewpwd=(text)=>{
      this.setState({newpwd:text})
    }
    handleCheckpwd=(text)=>{
      this.setState({checkpwd:text})
    }
    setpwd() {
      const { navigation } = this.props;
      const {requestBody} = this.props.route.params;
      if (this.state.newpwd == this.state.checkpwd) 
      {
        // 密码校验通过
        requestBody.data.password=this.state.newpwd;
        fetch('http://47.94.160.129:8080/api/home_page/set_up/change_password', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.code === 0) {
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
              // 更新失败
              Alert.alert(data.message);
            }
          })
          .catch(() => {
            // 发送请求失败
            Alert.alert('请求失败，请检查网络设置');
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
          <ImageBackground source={require('../images/home.png')} style={styles.background}>
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
                        defaultValue=''
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
                        defaultValue=''
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
          </ImageBackground>
          );
    }
}

export default SetNewPwdScreen;


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
    borderWidth: 2,
    borderColor: theme.colors.gray2,
    backgroundColor:theme.colors.white,
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