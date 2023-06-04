import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { theme } from '../constants';
import { TouchableOpacity,ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

class SignupScreen extends React.Component{
    static navigationOptions={
        header:null,
    }

    state={
      stuID:'',
      phoNum:'',
      userName:'',
      password:'',
      checkPwd:''
    }
    

    handleStuId=(text)=>{
      this.setState({stuID:text})
    }
    handlePhoNum=(text)=>{
      this.setState({phoNum:text})
    }
    handleUserName=(text)=>{
      this.setState({userName:text})
    }
    handlePassword=(text)=>{
      this.setState({password:text})
    }
    handleCheckPwd=(text)=>{
      this.setState({checkPwd:text})
    }
    check(){
      const{navigation}=this.props;
      const requestBody = {
        type: 'laborum enim in velit',
        code: 79,
        message: 'esse nulla labore sed Duis',
        data: {
          stuID: this.state.stuID,
          phoNum:this.state.phoNum,
          userName:this.state.userName,
          gender:'',
          password: this.state.password,
          status:0,
          dislike:'',
          taste:'',
          foodpre:'',
          id:0,
        }
      };
      if(this.state.password!=this.state.checkPwd)
      {
        Alert.alert("密码不一致");
      }
      else{
          fetch('http://47.94.160.129:8080/api/sign_up', 
            {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
              })
              .then((response) => response.json())
              .then((data) => {
                if (data.code===0) 
                {
                  const id = data.data.id;
                  requestBody.data.id=id;
                  navigation.navigate('SetPrefer',{requestBody: requestBody});
                } 
                else {
                  console.error('请求返回错误:', data.message);
                }
              })
              .catch((error) => {
                console.error(error);
              });
            }
    }

    render(){
        const {navigation} =this.props;
        return (
          <ImageBackground source={require('../images/home.png')} style={styles.background}>
            <View style={styles.container}>
              <View>
                <Text style={styles.text1}>创建一个新账户</Text>
              </View>
             

              <View style={styles.buttonContainer1}>

                <View style={styles.textInputContainer}>
                  <View style={styles.iconContainer}>
                  <Icon name="id-card" size={20}/>
                  </View>
                  <TextInput 
                    placeholder='学号'
                    placeholderTextColor={theme.colors.gray}
                    autoCapitalize='none'
                    onChangeText={this.handleStuId}
                  />
                </View> 

                <View style={styles.textInputContainer}>
                  <View style={styles.iconContainer}>
                  <Icon name="phone-square-alt" size={20}/>
                  </View>
                  <TextInput 
                    placeholder='电话号码'
                    placeholderTextColor={theme.colors.gray}
                    autoCapitalize='none'
                    onChangeText={this.handlePhoNum}
                  />
                </View> 

                <View style={styles.textInputContainer}>
                  <View style={styles.iconContainer}>
                  <Icon name="user" size={20}/>
                  </View>
                  <TextInput 
                    placeholder='用户名'
                    placeholderTextColor={theme.colors.gray}
                    keyboardType='phone-pad'
                    autoCapitalize='none'
                    onChangeText={this.handleUserName}
                  />
                </View> 

                <View style={styles.textInputContainer}>
                  <View style={styles.iconContainer}>
                  <Icon name="lock" size={20}/>
                  </View>
                  <TextInput 
                    placeholder='密码'
                    placeholderTextColor={theme.colors.gray}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                  />
                </View> 

                <View style={styles.textInputContainer}>
                  <View style={styles.iconContainer}>
                    <Icon name="lock" size={20} />
                  </View>
                  <TextInput 
                    placeholder='确认密码'
                    placeholderTextColor={theme.colors.gray}
                    autoCapitalize='none'
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={this.handleCheckPwd}
                  />
                </View>
                

                <View style={styles.buttonContainer3}>
                  {/* <TouchableOpacity  onPress={() => navigation.navigate('UserOnCampus')}> */}
                  <TouchableOpacity  onPress={()=>this.check()}>
                      <View style={styles.button}>
                          <Text style={styles.buttonText}>注册</Text>
                      </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.buttonContainer3}>
                <View style={styles.buttonContainer2}>
                  <Text>已经有账号？</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.button1}>
                      <Text style={styles.buttonText1}>登录</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer2}>
                  <Text>不是校内人员？</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('UserOffCampus')}>
                      <View style={styles.button1}>
                          <Text style={styles.buttonText1}>游客模式</Text>
                      </View>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            </ImageBackground>
          );
    }
}

export default SignupScreen;

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
  buttonContainer1:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    marginTop:50,
    marginVertical:10,
  },
  buttonContainer2:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',

  },
  buttonContainer3:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    marginTop:10,
  },
  text1:{
    fontSize:40,
    color:theme.colors.black,
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
    fontSize:18,
    color: 'white',
    margin:15,
    justifyContent: 'center',
  },
  button1:{
    height:30,
    width: 90,
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
  },
});