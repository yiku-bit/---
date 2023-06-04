import React from 'react';
import { Button, View, Text ,Alert, Image,TouchableOpacity,ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

class UserOnCampusScreen extends React.Component{
  static navigationOptions={
    title: 'Home'
  }
  componentDidMount(){
    const {navigation} = this.props;
    navigation.setOptions({
      title: 'Home' 
    });
  }
    

    render(){
      const {navigation} =this.props;
      
      const { requestBody} = this.props.route.params;
        return (
        <ImageBackground source={require('../images/home.png')} style={styles.background}>
          <View style={styles.container}>
            <View style={styles.hellocontainer}>
              <Text style={styles.hellotext}>{requestBody.data.userName}，你好👋！</Text>
            </View>
          <View>
            <Text style={styles.text1}>今日菜品</Text>
          </View>
        

          <View style={styles.buttonContainer1}>
          <View style={styles.buttonContainer2}>
                <View style={styles.iconContainer4}>
                  <Icon name="calendar-day" size={25} color={theme.colors.white}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text2}>每日推荐</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Evecommand')}>
                  <View style={styles.iconContainer1}>
                    <Icon name="play" size={15} color={theme.colors.white}/>
                  </View>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer2}>
                <View style={styles.iconContainer}>
                  <Icon name="fire" size={25} color={theme.colors.white}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text2}>热门菜品</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Popudish')}>
                  <View style={styles.iconContainer1}>
                    <Icon name="play" size={15} color={theme.colors.white}/>
                  </View>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer2}>
                <View style={styles.iconContainer2}>
                  <Icon name="columns" size={25} color={theme.colors.white}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text2}>评价栏</Text>
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Comcolu')}>
                <View style={styles.iconContainer1}>
                  <Icon name="play" size={15} color={theme.colors.white}/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer2}>
                <View style={styles.iconContainer3}>
                  <Icon name="star" size={25} color={theme.colors.white}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text2}>新品/折扣菜品</Text>
                </View>
              <TouchableOpacity onPress={() => navigation.navigate('Newsale')}>
                <View style={styles.iconContainer1}>
                  <Icon name="play" size={15} color={theme.colors.white}/>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer2}>
                <View style={styles.iconContainer5}>
                  <Icon name="tv" size={25} color={theme.colors.white}/>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text2}>流量监控</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Flow')}>
                  <View style={styles.iconContainer1}>
                    <Icon name="play" size={15} color={theme.colors.white}/>
                  </View>
                </TouchableOpacity>
            </View>

          </View>
        </View> 
        </ImageBackground>
          );
    }
}
  export default UserOnCampusScreen;

  const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
      padding:30,
    },
    background:{
      flex: 1,
      resizeMode: 'cover',
    },
    hellocontainer:{
      textAlign:'left',
      width:500,
      height:100,
    },
    hellotext:{
      fontSize:25,
      color:theme.colors.black,

    },
    buttonContainer1:{
      alignContent:'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
    },
    buttonContainer2:{
      alignContent:'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      backgroundColor:theme.colors.white,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      height:80,
      width: 400,
      marginVertical:20,
      borderWidth:1,
      borderColor:theme.colors.gray2,
    },
    text1:{
      fontSize:40,
      color:theme.colors.black,
      textAlign:'left'
    },
    text2:{
      fontSize:18,
      color:theme.colors.black,
      paddingLeft:10,
      textAlign:'left',
    },
    iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.white,
      marginVertical:10,
      marginHorizontal:10,
      width:50,
      height:50,
      backgroundColor:theme.colors.accent,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
    },
    iconContainer1:{
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:10,
      marginHorizontal:40,
      marginRight:20,
      width:50,
      height:50,
      backgroundColor:'green',
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      borderBottomRightRadius:25,
      borderBottomLeftRadius:25,
    },
    iconContainer2:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.white,
      marginVertical:10,
      marginHorizontal:10,
      width:50,
      height:50,
      backgroundColor:'skyblue',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
    },
    iconContainer3:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.white,
      marginVertical:10,
      marginHorizontal:10,
      width:50,
      height:50,
      backgroundColor:'yellowgreen',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
    },
    iconContainer4:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.white,
      marginVertical:10,
      marginHorizontal:10,
      width:50,
      height:50,
      backgroundColor:'coral',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
    },
    iconContainer5:{
      alignItems: 'center',
      justifyContent: 'center',
      color:theme.colors.white,
      marginVertical:10,
      marginHorizontal:10,
      width:50,
      height:50,
      backgroundColor:'slateblue',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
    },
    textContainer:{
      alignItems:'flex-start',
      justifyContent: 'center',
      width:150,
    }
  });