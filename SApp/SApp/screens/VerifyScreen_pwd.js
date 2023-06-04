import React from 'react';
import { Button, View, Text ,Alert, Image,TextInput} from 'react-native';
import { TouchableOpacity,StyleSheet } from 'react-native';
import { theme } from '../constants';
import { NavigationEvents } from 'react-navigation';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'


  class VerifyScreen_pwd extends React.Component{
    static navigationOptions={
        header:null,
    }
    state = {
      telephone: '',
      verificationCode: ['', '', '', ''],
    };

    componentDidMount() {
      const { telephone } = this.props.route.params;
      this.setState({ telephone });
    }
  
    handleVerificationCodeInputChange = (index, value) => {
      const { verificationCode } = this.state;
  
      // 更新验证码输入框的值
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      this.setState({ verificationCode: newVerificationCode });
  
      // 自动将焦点设置到下一个或上一个验证码输入框
      if (value !== '') 
      {
        // 已输入新的字符，设置焦点到下一个输入框
        if (index < 3) 
        {
          this[`verificationCodeInput${index + 1}`].focus();
        }
      } 
      else 
      {
        // 删除字符，设置焦点到上一个输入框
        if (index > 0) 
        {
          this[`verificationCodeInput${index - 1}`].focus();
        }
      }
    };
  
    renderVerificationCodeInputs = () => {
      const { verificationCode } = this.state;
  
      return (
        <View style={styles.verificationCodeInputGroup}>
          <TextInput
            ref={ref => { this.verificationCodeInput0 = ref; }}
            style={styles.verificationCodeInput}
            maxLength={1}
            keyboardType="numeric"
            value={verificationCode[0]}
            onChangeText={value => this.handleVerificationCodeInputChange(0, value)}
          />
          <TextInput
            ref={ref => { this.verificationCodeInput1 = ref; }}
            style={styles.verificationCodeInput}
            maxLength={1}
            keyboardType="numeric"
            value={verificationCode[1]}
            onChangeText={value => this.handleVerificationCodeInputChange(1, value)}
          />
          <TextInput
            ref={ref => { this.verificationCodeInput2 = ref; }}
            style={styles.verificationCodeInput}
            maxLength={1}
            keyboardType="numeric"
            value={verificationCode[2]}
            onChangeText={value => this.handleVerificationCodeInputChange(2, value)}
          />
          <TextInput
            ref={ref => { this.verificationCodeInput3 = ref; }}
            style={styles.verificationCodeInput}
            maxLength={1}
            keyboardType="numeric"
            value={verificationCode[3]}
            onChangeText={value => this.handleVerificationCodeInputChange(3, value)}
          />
        </View>
      );
    };

    check(){
      const{navigation}=this.props;
      const {requestBody} = this.props.route.params;
      if (this.state.verificationCode.join('') === '8585')
        {
          navigation.navigate('SetNewPwd',{requestBody: requestBody});
        }
        else
        {
          Alert.alert("验证码错误");
        }
    }

    render(){
      const { navigation } = this.props;
      const {requestBody} = this.props.route.params;
        return (
          <View style={styles.container}>
            <View>
              <Text style={styles.text1}>验证码已经发送至：+86 {requestBody.data.phoNum}</Text>
            </View>

          
            <View style={styles.content}>

              {/* 添加验证码输入框 */}
              {this.renderVerificationCodeInputs()}
            </View>

          <View style={styles.buttonContainer1}>
            <TouchableOpacity  onPress={()=>this.check()}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>提交</Text>
                </View>
            </TouchableOpacity>
          </View>

        </View>
          );
    }
}

export default VerifyScreen_pwd;

const styles=StyleSheet.create({
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    
  },
  verificationCodeInputGroup:{
    flexDirection:'row',
  },
  verificationCodeInput:{
    width:60,
    height:60,
    borderRadius:5,
    borderWidth:2,
    borderColor:theme.colors.black,
    marginVertical:30,
    marginHorizontal:10,
    textAlign:'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    backgroundColor:theme.colors.white,
  },
  buttonContainer1:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  text1:{
    fontSize:15,
    color:theme.colors.black,
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
    flexDirection:'row',
    color:theme.colors.gray,
    marginVertical:10,
    marginHorizontal:10,
  }
});
