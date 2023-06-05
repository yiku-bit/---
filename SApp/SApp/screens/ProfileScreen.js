import React from 'react';
import { Button, View, Text ,Alert, Image,StyleSheet,TextInput,ImageBackground} from 'react-native';
import { theme } from '../constants';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';


  class ProfileScreen extends React.Component{
    static navigationOptions={
        header:null,
    }
    state = {
      taste: '',
      foodPre: '',
      dislike:'',
    };

    componentDidMount() {
      const { requestBody } = this.props.route.params;
      this.setState({ taste: requestBody.data.taste });
      this.setState({ foodPre: requestBody.data.foodPre });
      this.setState({ dislike: requestBody.data.dislike });
    }

    handledislike=(text)=>{
      this.setState({dislike:text})
    }

    submit(){
      const {navigation}=this.props;
      const {requestBody} = this.props.route.params;
      requestBody.data.taste=this.state.taste;
      requestBody.data.foodPre=this.state.foodPre;
      requestBody.data.dislike=this.state.dislike;
      fetch('http://47.94.160.129:8080/api/home_page/edit_profile', 
      {
          method: 'PUT',
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
            Alert.alert('修改成功')
          } 
          else {
            console.error('请求返回错误:', data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    

    render(){
      const {navigation}=this.props;
      const { requestBody} = this.props.route.params;
        return (
          <ImageBackground source={require('../images/home.png')} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text1}>个人资料</Text>
            </View>

            <View style={styles.container2}>
                  <View style={styles.iconContainer}>
                    <Icon name="user-circle" size={50}/>
                  </View>
                <Text style={styles.text4}>{requestBody.data.userName}</Text>
            </View>

            <View >
              <Text >学号</Text>
              <View style={styles.textInputContainer}>
                <Text style={styles.text3}>{requestBody.data.stuID}</Text>
              </View>
            </View>

            <View>
                <Text>电话号码</Text>
              <View style={styles.textInputContainer}>
                <Text style={styles.text3}>{requestBody.data.phoNum}</Text>
              </View>
            </View>

            <View>
              <Text>选择您的口味偏好</Text>
              <View style={styles.textInputContainer}>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.taste}
                  onValueChange={(itemValue, itemIndex) => this.setState({taste: itemValue})}>
                  <Picker.Item label="选择口味偏好" value="" />
                  <Picker.Item label="偏甜" value="偏甜" />
                  <Picker.Item label="偏咸" value="偏咸" />
                  <Picker.Item label="偏辣" value="偏辣" />
                  <Picker.Item label="偏淡" value="偏淡" />
                </Picker>
              </View>
            </View>

            <View>
                  <Text>选择您的饮食类型偏好</Text>
                  <View style={styles.textInputContainer}>
                    <Picker
                      style={styles.picker}
                      selectedValue={this.state.foodPre}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({foodPre: itemValue})
                      }>
                      <Picker.Item label="选择类型偏好" value="" />
                      <Picker.Item label="米饭" value="米饭" />
                      <Picker.Item label="面食" value="面食" />
                      <Picker.Item label="其他" value="其他" />
                      
                    </Picker>
                  </View>
                </View>

                <View>
                  <Text>您是否有忌口或不喜欢吃的食物？</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput 
                      style={styles.textinput}
                      value={this.state.dislike}
                      placeholderTextColor={theme.colors.black}
                      onChangeText={this.handledislike}
                    />
                  </View>
                </View>


              

            <View style={styles.buttonContainer1}>
        
              <View style={styles.buttonContainer1}>
                <TouchableOpacity  onPress={()=>this.submit()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>修改偏好设置</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>

              
          </View>
        </ImageBackground>
          );
    }
}

export default ProfileScreen;

const styles=StyleSheet.create({
  textinput:{
    marginLeft:10,
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
  },
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
    },
    container1:{
      alignItems: 'center',
      justifyContent: 'center',
      width:350,
      margin:20,
    },
    buttonContainer1:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    container2:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      marginVertical:20,
    },
    container3:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      marginVertical:10,
      marginHorizontal:40,
      width:120,
    },
    container4:{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      marginVertical:10,
    },
    text1:{
      fontSize:40,
      color:theme.colors.black,
    },
    text2:{
      fontSize:15,
      textAlign:'center',
    },
    text3:{
        fontSize:20,
        textAlign:'center',
        margin:10
      },
      text4:{
        fontSize:25,
        color:theme.colors.black,
        margin:10,
        textAlign:'center',
      },
    button: {
      height:50,
      width: 200,
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
      height:50,
      width: 200,
      alignItems: 'center',
      backgroundColor: 'mistyrose',
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      marginVertical:10,
      marginHorizontal:10,
    },
    buttonText1: {
      textAlign: 'center',
      fontSize:15,
      padding:15,
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
      width:350,
      flexDirection:'row',
      marginVertical:20,
    },
    iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.gray,
      marginVertical:10,
      marginHorizontal:10,
    },
    picker: {
      height: 50,
      width: '100%',
      alignContent:'center',
      alignItems:'center',
    }
    
  });
  