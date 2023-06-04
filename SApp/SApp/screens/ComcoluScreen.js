import React, { Component } from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'
import Taste from '../constants/taste';
import Service from '../constants/service';
import Enviroment from '../constants/enviroment';
import ModalDropdown from 'react-native-modal-dropdown';
import { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Image } from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
class ComcoluScreen extends React.Component{
    static navigationOptions={
        header:null,
    }

    // render(){
    //     const {navigation} =this.props;
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //           <Text>评价栏</Text>
    //         </View>
    //       );
    // }
    constructor(props) {
      super(props);
      this.state = {
          canteen: '',
          floor: '',
          window: '',
          dish: '',
          taste: '0',
          service: '0',
          environment: '0',
          list: [],
          refreshing: false,
          thisdishlist:[],
          dishname:'',
      }
  }
  fetchDishList = (c,f,w) => {
    var dishlist = [
      {
        name: '',
        id :0,
      }
    ];
    var myURL = 'http://47.94.160.129:8080/api/home_page/dishlist?canteen='+c+'&floor='+f+'&window='+w;
    fetch(myURL)
      .then(response => response.json())
      .then(data => {
        if (data.code === 1) {
          dishlist = data.data.dishlist;//dishlist is an array
          console.log(111111);
          console.log(dishlist);
          this.setState({
            thisdishlist: dishlist,
          });
          }else {

          }
        }
      )
      .catch(error => {
        console.error(error);
      });
  };
  setData = (c, f, w, d,o) => {
    let encodedStr = encodeURIComponent(o);
      var myURL = 'http://47.94.160.129:8080/api/home_page/opinion_bar?canteen=' + c + '&floor=' + f
          + '&window=' + w + '&dishid=' + d + '&dishname='+encodedStr;
      console.log(myURL);
      fetch(myURL)
          .then(response => response.json())
          .then(data => {
              // 检查返回数据是否成功
              if (data.code === 1) {
                  const comments = data.data.comments;
                  const rating = data.data.rating;
                  var tmp = [];
                  for (var i = 0; i < comments.length; i++) {
                      tmp.push(
                          {
                              user_name: comments[i].name,
                              comment: comments[i].comment,
                              date: comments[i].datetime,
                              photo: comments[i].photo,
                          }

                      );
                  }
                  this.setState({
                      list: tmp,
                      taste: rating.taste,
                      service: rating.serve,
                      environment: rating.environment
                  });
              } else {

              }
          })
          .catch(error => {
              // 处理请求错误
              console.error(error);
          });
  }

  canteenSelect = (index, option) => {

      //var c = 0;
      this.setState({ canteen: index + 1 });
      this.setState({ floor: '', window: '', dish: '' }); // 添加此行代码
    //   this.setData(index + 1, '', '', ''); // 修改此行代码
      // this.setData(index + 1, this.state.floor, this.state.window, this.state.dish);
      this.fetchDishList(index+1,this.state.floor,this.state.window);
  }
  floorSelect = (index, option) => {
      // console.log('floor' + index + ' ' + option);
      this.setState({ floor: index + 1 });
      // this.setData(this.state.canteen, index + 1, this.state.window, this.state.dish);
      this.setState({ window: '', dish: '' }); // 添加此行代码
    //   this.setData(this.state.canteen, index + 1, '', ''); // 修改此行代码
      this.fetchDishList(this.state.canteen,index+1,this.state.window);

  }
  windowSelect = (index, option) => {
      // console.log('window' + index + ' ' + option);
      this.setState({ window: index + 1 });
      // this.setData(this.state.canteen, this.state.floor, index + 1, this.state.dish);
      this.setState({ dish: '' }); // 添加此行代码
    //   this.setData(this.state.canteen, this.state.floor, index + 1, ''); // 修改此行代码
      this.fetchDishList(this.state.canteen,this.state.floor,index+1);
  }
  dishSelect = (index, option) => {
      // console.log('setDish' + index + ' ' + option);
    var id;
    //   this.setState({ dish: index + 1 ,dishname:option});
      var targetDishName = option;  // 目标菜品名称
      for (var i = 0; i < this.state.thisdishlist.length; i++) {
          var dish = this.state.thisdishlist[i];
          if (dish.name == targetDishName) {  // 找到目标菜品
            id = dish.id;
            console.log(id);
            break;
          }
        }
    this.setState({dish:id,dishname:option});
    console.log(option);
    //   this.setData(this.state.canteen, this.state.floor, this.state.window, index + 1);
    this.setData(this.state.canteen, this.state.floor, this.state.window, id,option);

  }

  render() {
      //选择框的选项
      const options1 = ['北食堂', '清真食堂', '东食堂', '南食堂',''];
      const options2 = ['一层', '二层', '三层','',''];
      const options3 = ['一号窗口', '二号窗口', '三号窗口', '四号窗口', '五号窗口', '六号窗口'];
    //   const options4 = ['菜品1', '菜品2', '菜品3', '菜品4', '菜品5', '菜品六'];
    const options4 = this.state.thisdishlist.map(dish => dish.name);
      return (
        <ImageBackground source={require('../images/background.png')} style={styles.background}>
          <View >
              {/* <Text style={styles.text1}>评价栏</Text> */}
              <Text style={styles.text2}>选择窗口</Text>

              {/* <View style={styles.dropdownStyle}>
                  <ModalDropdown
                      style={styles.modalDropDownStyle}
                      options={options1}
                      onSelect={this.canteenSelect}
                      defaultValue={'canteen'}
                      dropdownTextStyle={styles.modaldropTextStyle}

                  />

                  <ModalDropdown
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options2}
                      onSelect={this.floorSelect}
                      defaultValue={'floor'}
                  />

                  <ModalDropdown
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options3}
                      onSelect={this.windowSelect}
                      defaultValue={'window'}
                  />

                  <ModalDropdown
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options4}
                      onSelect={this.dishSelect}
                      defaultValue={'dish'}
                  />
              </View> */}
              <View style={styles.dropdowncontainer}>
                <View style={styles.dropdownStyle}>
                  <View style={styles.choosecontainer}>
                    <View style={styles.iconContainer}>
                      <Icon name="building" size={25} color={theme.colors.white}/>
                    </View>


                    <ModalDropdown
                        defaultTextStyle={styles.defaultText}
                      style={styles.modalDropDownStyle}
                      options={options1}
                      onSelect={this.canteenSelect}
                      defaultValue={'canteen'}
                      dropdownTextStyle={styles.modaldropTextStyle}

                  />

                  </View>

                  <View style={styles.choosecontainer}>
                    <View style={styles.iconContainer1}>
                      <Icon name="archive" size={25} color={theme.colors.white}/>
                    </View>


                    <ModalDropdown
                        defaultTextStyle={styles.defaultText}
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options2}
                      onSelect={this.floorSelect}
                      defaultValue={'floor'}
                  />
                  </View>

                  <View style={styles.choosecontainer}>
                    <View style={styles.iconContainer2}>
                      <Icon name="window-maximize" size={25} color={theme.colors.white}/>
                    </View>
                    <ModalDropdown
                     defaultTextStyle={styles.defaultText}
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle}
                      options={options3}
                      onSelect={this.windowSelect}
                      defaultValue={'window'}
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
                    defaultTextStyle={styles.defaultText}
                      dropdownTextStyle={styles.modaldropTextStyle}
                      style={styles.modalDropDownStyle2}
                      options={options4}
                      onSelect={this.dishSelect}
                      defaultValue={'dish'}
                  />

              </View>
            </View>

              <Text style={styles.text2}>评价</Text>

              <Taste sorce={this.state.taste} />
              <Enviroment sorce={this.state.environment} />
              <Service sorce={this.state.service} />

              <View />
              <FlatList
                  data={this.state.list}
                  renderItem={({ item }) => <View style={styles.card}>
                      <Image source={{ uri: item.photo }} style={styles.image} />

                      <View >
                          <View style={styles.namePriceContainer}>
                              <Text style={styles.name}>{item.user_name}</Text>
                          </View>
                        <View>
                            <Text style={styles.commentStyle}>{item.comment}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataStyle}>{item.date}</Text>
                        </View>
                      </View>
                  </View>}

                //   ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
                //   ListEmptyComponent={() => <View><Text style={styles.EmptyComponent}>评论为空</Text></View>}

                  refreshControl={
                      <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={() => {
                              this.setState({ refreshing: true });
                              setTimeout(() => {
                                  this.setState({ refreshing: false });
                              }, 2000);
                          }}
                      />
                  }
              />

          </View>
          </ImageBackground>
      );
  }
}
export default ComcoluScreen;

  const styles = StyleSheet.create(
    {

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
            borderBottomWidth: 1,
            marginTop: 5
        },
        separatorStyle1: {
            borderColor: '#A4A4A4',
            borderBottomWidth: 2,
            marginTop: 30,
        },
        commentStyle: {
            color: 'black',
            fontSize: 20,
            marginLeft:80,
            marginBottom:10,
        },
        dataStyle: {
            color: 'black',
            fontSize: 15,
            marginLeft:220,
            //alignSelf: 'flex-end',
        },
        commentImage: {
            tintColor: 'red',

        },

       
        cardContainer: {
            marginTop: 20,
            width: '100%',
            alignItems: 'center'
        },
        card: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal:40,
            backgroundColor: 'white',
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        image: {
            width: 120,
            height: 120,
            marginRight: 10,
            borderRadius: 8,
        },
        cardContent: {
            flex: 1,
        },
        priceContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        name: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom:10,
        },
        discountPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            // color: theme.colors.primary,
            marginRight: 5,
        },
        originalPrice: {
            fontSize: 15,
            // color: theme.colors.gray,
            textDecorationLine: 'line-through',
        },
        location: {
            fontSize: 14,
            // color: theme.colors.gray,
            marginBottom: 5,
        },
        description: {
            fontSize: 14,
            // color: theme.colors.gray,
            marginBottom: 5,
        },
        comment: {
            fontSize: 14,
            // color: theme.colors.gray,
            marginBottom: 10,
        },
        namePriceContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        button: {
            // backgroundColor: theme.colors.primary,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            // marginTop: 20,
            marginBottom: 30,
        },
        buttonText: {
            fontSize: 16,
            // color: theme.colors.white,
            fontWeight: 'bold',
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
          },
          modalDropDownStyle2: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            width:280,
            backgroundColor: theme.colors.white,
            borderRadius: 30,
            
        },
    }
);

