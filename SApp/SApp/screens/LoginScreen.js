import React from 'react';
import { View, Text ,Alert, Image,StyleSheet,TextInput,Switch, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../constants';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../components';



class LoginScreen extends React.Component{
    static navigationOptions={ 
    }
    state={
      stuID:'',
      password:'',
      rememberMe: false,
      isPasswordVisible: false, // 初始状态为不可见
    }
    async componentDidMount() {
      // 在组件加载时从本地存储中读取用户名和密码
      const [stuID, password] = await AsyncStorage.multiGet(['stuID', 'password']);
      if (stuID[1] && password[1]) {
        this.setState({
          stuID: stuID[1],
          password: password[1],
          rememberMe: true,
        });
      }
    }

    handleStuIDChange = (stuID) => {
      this.setState({stuID});
    };
  
    // 在 handlePasswordChange() 方法中添加 isPasswordVisible 参数，并更新 state
    handlePasswordChange = (password, isPasswordVisible) => {
      this.setState({password, isPasswordVisible});
    };
  
    handleRememberMeChange = (rememberMe) => {
      this.setState({rememberMe});
    };

    login = async () => {
      const{navigation}=this.props;
      const requestBody = {
        type: 'laborum enim in velit',
        code: 79,
        message: 'esse nulla labore sed Duis',
        data: {
          stuID: this.state.stuID,
          password: this.state.password,
        }
      };
      let returnBody={
        type: '',
        code: 1,
        message: '',
        data: {
          stuID: '',
          phoNum:'',
          userName:'',
          gender:'',
          password: '',
          status:0,
          dislike:'',
          taste:'',
          foodpre:'',
          id:0,
        }
      };
      // 将用户名和密码保存到本地存储中
      if (this.state.rememberMe) {
        await AsyncStorage.multiSet([
          ['stuID', this.state.stuID],
          ['password', this.state.password],
        ]);
      } else {
        await AsyncStorage.multiRemove(['stuID', 'password']);
      }

      fetch('http://47.94.160.129:8080/login', 
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
          if (data.code===0) {
            returnBody=data;
            navigation.navigate('UserOnCampus',{requestBody: returnBody});
          } else {
            Alert.alert('请求返回错误:', data.message);
            console.log(data);
            console.error('请求返回错误:', data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render(){
        const {navigation} =this.props;
        return (
        <ImageBackground source={require('../images/home.png')} style={styles.background}>
          <View style={styles.container}>
              <View>
                <Text style={styles.text1}>登录您的账户</Text>
              </View>

              <View style={styles.buttonContainer1}>
                <View>
                  <View style={styles.textInputContainer}>
                    <View style={styles.iconContainer}>
                    <Icon name="user" size={20}/>
                    </View>
                    <TextInput 
                      placeholder='学号'
                      placeholderTextColor={theme.colors.gray}
                      defaultValue={this.state.stuID}
                      keyboardType='phone-pad'
                      autoCapitalize='none'
                      onChangeText={this.handleStuIDChange}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <View style={styles.iconContainer}>
                      <Icon name="lock" size={20} />
                    </View>
                    <TextInput 
                      placeholder='密码'
                      placeholderTextColor={theme.colors.gray}
                      defaultValue={this.state.password}
                      autoCapitalize='none'
                      keyboardType='default'
                      secureTextEntry={!this.state.isPasswordVisible} // 根据状态来设置是否可见
                      onChangeText={this.handlePasswordChange}
                    />
                    <Icon
                      name={this.state.isPasswordVisible ? 'eye' : 'eye-slash'}
                      size={20}
                      color={theme.colors.gray}
                      style={styles.iconContainer2}
                      onPress={() => this.handlePasswordChange(this.state.password,!this.state.isPasswordVisible)}
                    />
                  </View>
                </View>

                <View style={styles.buttonContainer2}>
                  <Icon
                    name={this.state.rememberMe ? 'check-square' : 'square'}
                    size={20}
                    color={theme.colors.gray}
                    style={{marginRight: 10}}
                    onPress={() => this.handleRememberMeChange(!this.state.rememberMe)}
                  />
                  <Text>记住密码</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Captcha')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText1}>忘记密码？</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.buttonContainer1}>
                  {/* <TouchableOpacity  onPress={() => navigation.navigate('UserOnCampus')}> */}
                  <TouchableOpacity  onPress={()=>this.login()}>
                      <View style={styles.button}>
                          <Text style={styles.buttonText}>登录</Text>
                      </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.buttonContainer2}>
                <Text>没有账号？</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <View style={styles.button1}>
                    <Text style={styles.buttonText1}>创建新账户</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        </ImageBackground>
          );
    }
}

export default LoginScreen;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    //backgroundColor:theme.colors.white,
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
  buttonContainer1:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
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
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: theme.colors.gray2,
    borderWidth:1,
    borderColor:'#d9d9d9',
    backgroundColor:theme.colors.white,
    shadowColor:'#d9d9d9',
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.7,
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
  iconContainer2:{
    alignItems: 'center',
    justifyContent: 'center',
    color:theme.colors.gray,
    marginVertical:12,
    marginLeft:180,
  }
});
