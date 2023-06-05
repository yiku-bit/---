import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native'

import ModalDropdown from 'react-native-modal-dropdown';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

  class SendCommentScreen extends React.Component{
    static navigationOptions={
        header:null,
    }

    // render(){
    //     const {navigation} =this.props;
    //     return (
    //         <View>
    //             <Text>
    //                 发表评价
    //             </Text>
    //         </View>
    //     );
    // } 

    constructor(props) {
        super(props);
        //选择框状态
        this.state = {
          canteen: '',
          floor: '',
          window: '',
          dishid: '',
          //菜品名和评论
          thisdishlist: [],
          dishname: '',
          comment: '',
          //评分状态
          taste: '',
          service: '',
          environment: '',
          //评论列表状态
          list: [],
          refreshing: false,
          currentid: '',
        };
      }




      fetchDishList = () => {
        var dishlist = [
          {
            name: '',
            id :0,
          }
        ];
        fetch('http://47.94.160.129:8080/api/home_page/dishlist?canteen=1&floor=1&window=6')
          .then(response => response.json())
          .then(data => {
              dishlist = data.data.dishlist;//dishlist is an array
              console.log(111111);
              console.log(dishlist);
              this.setState({
                thisdishlist: dishlist,
              });
              }
          )
          .catch(error => {
            console.error(error);
          });
      };
    
      canteenSelect = (index, option) => {
        this.setState({
          canteen: index + 1,
        });
        this.fetchDishList(); 
      };
    
      floorSelect = (index, option) => {
        this.setState({
          floor: index + 1,
        });
        this.fetchDishList();
      };
    
      windowSelect = (index, option) => {
        this.setState({
          window: index + 1,
        });
        this.fetchDishList();
      };
    
      dishSelect = (index, option) => {
        this.setState({
          dish: index + 1,
          dishname:option
        });
        
      };
    
      sendComment = () => {
        const {requestBody} = this.props.route.params;
        var currentDate = new Date();
        const currentDateString = currentDate.toLocaleString();
        let returnBody = {
            address: {
                canteen: '',
                floor: '',
                window: '',
            },
            rating: {
                taste: '',
                environment: '',
                serve: '',
            },
            comment: {
                dishid: '',
                dishname: '',
                id: '',
                name: '',
                comment: '',
                photo: '',
                datetime: '',
            }
          };

        
        

        returnBody.address.canteen=this.state.canteen;
        returnBody.address.floor=this.state.floor;
        returnBody.address.window=this.state.window;
        returnBody.rating.taste=this.state.taste;
        returnBody.rating.serve=this.state.service;
        returnBody.rating.environment=this.state.environment;
        returnBody.comment.dishname=this.state.dishname;
        returnBody.comment.comment=this.state.comment;
        returnBody.comment.id=requestBody.data.stuID;
        returnBody.comment.name=requestBody.data.userName;
        returnBody.comment.time=currentDateString;
        
        console.log(222222);
        console.log(this.state.dishname);
        console.log(333333);
        console.log("thisdishlist"+this.state.thisdishlist);
        var targetDishName = this.state.dishname;  // 目标菜品名称
        for (var i = 0; i < this.state.thisdishlist.length; i++) {
            var dish = this.state.thisdishlist[i];
            if (dish.name == targetDishName) {  // 找到目标菜品
              returnBody.comment.dishid = dish.id;
              console.log(returnBody.comment.dishid);
              break;
            }
          }

        fetch('http://47.94.160.129:8080/api/home_page/write_comment', 
        {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(returnBody),
        })
      };

      render() {
        //选择框的选项
        const options1 = ['北食堂', '清真食堂', '东食堂', '南食堂','',''];
        const options2 = ['一层', '二层', '三层','',''];
        const options3 = [
          '一号窗口',
          '二号窗口',
          '三号窗口',
          '四号窗口',
          '五号窗口',
          '六号窗口',
          '',
          
        ];
        const options4 = this.state.thisdishlist.map(dish => dish.name);
        // console.log(this.state.thisdishlist);
    
        return (
        <ImageBackground source={require('../images/background.png')} style={styles.background}>
          <View style={styles.pagecontainer}>
            <View>
              <Text style={styles.text1}>写评价</Text>
            </View>
              
            <Text style={styles.text2}>选择食堂、楼层、窗口</Text>
    
            <View style={styles.dropdowncontainer}>
                <View style={styles.dropdownStyle}>
                  <View style={styles.choosecontainer}>
                    <View style={styles.iconContainer}>
                      <Icon name="building" size={25} color={theme.colors.white}/>
                    </View>
                    <ModalDropdown
                      style={styles.modalDropDownStyle}
                      options={options1}
                      onSelect={this.canteenSelect}
                      defaultValue={'canteen'}
                      defaultTextStyle={styles.defaultText}
                      dropdownTextStyle={styles.modaldropTextStyle}
                    />
                  </View>

                  <View style={styles.choosecontainer}>
                    <View style={styles.iconContainer1}>
                      <Icon name="archive" size={25} color={theme.colors.white}/>
                    </View>
                    <ModalDropdown
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options2}
                      onSelect={this.floorSelect}
                      defaultValue={'floor'}
                      defaultTextStyle={styles.defaultText}
                    />
                  </View>

                  <View style={styles.choosecontainer}>
                    <View style={styles.iconContainer2}>
                      <Icon name="window-maximize" size={25} color={theme.colors.white}/>
                    </View>
                    <ModalDropdown
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options3}
                      onSelect={this.windowSelect}
                      defaultValue={'window'}
                      defaultTextStyle={styles.defaultText}
                    />
                  </View>
                </View>
            </View>
            
            <Text style={styles.text2}>选择菜品</Text>

            <View style={styles.dropdowncontainer}>
              <View style={styles.choosecontainer2}>
                  <View style={styles.iconContainer3}>
                    <Icon name="utensils" size={25} color={theme.colors.white}/>
                  </View>
                <ModalDropdown
                    dropdownTextStyle={styles.modaldropTextStyle}
                    style={styles.modalDropDownStyle2}
                    options={options4}
                    onSelect={this.dishSelect}
                    defaultValue={'dish'}
                    defaultTextStyle={styles.defaultText}
                  />
              </View>
            </View>
                
            
    
            <Text style={styles.text2}>评价</Text>

              <View style={styles.commentcontainer}>
                <View>
                  <Text>味道</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textinput}
                      value={this.state.taste}
                      onChangeText={(taste) => this.setState({ taste })}
                      placeholder=' 请输入味道评分'
                    />
                  </View>
                </View>

                <View>
                  <Text>服务</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textinput}
                      value={this.state.service}
                      onChangeText={(service) => this.setState({ service })}
                      placeholder=' 请输入服务评分'
                    />
                  </View>
                </View>

                <View>
                  <Text>环境</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textinput}
                      value={this.state.environment}
                      onChangeText={(environment) =>
                        this.setState({ environment })
                      }
                      placeholder=' 请输入环境评分'
                    />
                  </View>
                </View>

                <View>
                  <Text>评论</Text>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      style={styles.textinput}
                      value={this.state.comment}
                      onChangeText={(comment) => this.setState({ comment })}
                      placeholder=' 请输入评论'
                    />
                  </View>
                </View>

              </View>
    
            <View style={styles.buttonContainer3}>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => this.sendComment()}>
                <Text style={styles.buttonText}>发送</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        );
      }
}

export default SendCommentScreen;

const styles = StyleSheet.create(
    {
        pagecontainer:{
          
          flex:1,
        },
        text1: {
          fontSize:35,
          color:theme.colors.black,
          lineHeight: 100,
          margin:20,
        },
        background:{
          flex: 1,
          resizeMode: 'cover',
        },
        text2: {
            fontSize: 25,
            lineHeight: 60,
            marginLeft:50,
        },
        scrollViewStyle: {
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10
        },
        EmptyComponent: {
            fontSize: 50,
            color: 'red',
            alignSelf: 'center',
        },
        headerTextStyle: {
            fontSize: 20,
            color: '#FFFFFF'
        },
        itemViewStyle: {
            height: 100,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 5,

        },
        itemTextStyle: {
            color: 'black',
            fontSize: 20
        },
        separatorStyle: {
            borderColor: '#A4A4A4',
            borderBottomWidth: 2,
            marginTop: 5
        },
        separatorStyle1: {
            borderColor: '#A4A4A4',
            borderBottomWidth: 15,
            marginTop: 10
        },
        commentStyle: {
            alignSelf: 'center',
            color: 'black',
            fontSize: 20
        },
        dataStyle: {
            color: 'black',
            fontSize: 15,
            alignSelf: 'flex-end',
            marginLeft: 150
        },
        commentImage: {
            tintColor: 'red',

        },
        dropdownStyle: {
            flexDirection: 'row',
            //justifyContent: 'space-between',
        },
        dropdowncontainer:{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:20,
        },
        modalDropDownStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width:100,
            backgroundColor: theme.colors.white,
            borderRadius: 30,
        },
        modalDropDownStyle2: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          width:280,
          backgroundColor: theme.colors.white,
          borderRadius: 30,
          
      },
        modaldropTextStyle: {
            fontSize: 15,

        },
        defaultText:{
          fontSize: 15,
          color:theme.colors.black,
          marginRight:15,
        },
        buttonStyle: {
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
        buttonContainer3:{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'column',
          marginTop:10,
        },
        textInputContainer:{
          borderWidth: 2,
          borderColor: theme.colors.gray2,
          backgroundColor:theme.colors.white,
          borderRadius: theme.sizes.radius,
          height: 50,
          width:350,
          flexDirection:'row',
          marginVertical:10,
        },
        textinput:{
          marginLeft:10,
        },
        commentcontainer:{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'column',
        },
        iconContainer:{
          alignItems: 'center',
          justifyContent: 'center',
          color:theme.colors.white,
          marginVertical:5,
          marginHorizontal:10,
          width:50,
          height:50,
          backgroundColor:'skyblue',
          borderTopLeftRadius:25,
          borderTopRightRadius:25,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
        },
        iconContainer1:{
          alignItems: 'center',
          justifyContent: 'center',
          color:theme.colors.white,
          marginVertical:5,
          marginHorizontal:10,
          width:50,
          height:50,
          backgroundColor:'yellowgreen',
          borderTopLeftRadius:25,
          borderTopRightRadius:25,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
        },
        iconContainer2:{
          alignItems: 'center',
          justifyContent: 'center',
          color:theme.colors.white,
          marginVertical:5,
          marginHorizontal:10,
          width:50,
          height:50,
          backgroundColor:'coral',
          borderTopLeftRadius:25,
          borderTopRightRadius:25,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
        },
        iconContainer3:{
          alignItems: 'center',
          justifyContent: 'center',
          color:theme.colors.white,
          marginVertical:5,
          marginHorizontal:10,
          width:50,
          height:50,
          backgroundColor:'slateblue',
          borderTopLeftRadius:25,
          borderTopRightRadius:25,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
        },
        choosecontainer:{
          flexDirection:'row',
          backgroundColor:theme.colors.white,
          height:60,
          width:160,
          margin:10,
          borderRadius:30,
        },
        choosecontainer2:{
          flexDirection:'row',
          backgroundColor:theme.colors.white,
          height:60,
          width:400,
          borderRadius:30,
        }
    }
);