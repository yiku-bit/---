import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

class EvecommandScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    dishes: [] // 从后端获取的菜品数据将存储在此状态中
  };

  componentDidMount() {
    fetch('http://47.94.160.129:8080/api/home_page/recommend?id=1&date=2015-15&number=5')
      .then(response => response.json())
      .then(data => {
        // 检查返回数据是否成功
        if (data.code === 1) {
          const dishes = data.data.dishes;
          // 处理菜品数据
          // 例如，将菜品数据更新到组件的状态
          this.setState({ dishes });
        } else {
          console.error('请求返回错误:', data.message);
        }
      })
      .catch(error => {
        // 处理请求错误
        console.error(error);
      });
  }
  handleRecommendAgain = () => {
    fetch('http://47.94.160.129:8080/api/home_page/recommend?id=1&date=2015-15&number=5')
      .then(response => response.json())
      .then(data => {
        if (data.code === 1) {
          const dishes = data.data.dishes;
          // 处理菜品数据，例如更新组件状态
          this.setState({ dishes });
        } else {
          console.error('请求返回错误:', data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    const { navigation } = this.props;
    const { dishes } = this.state; // 从状态中获取菜品数据

    // 假设你从后端获取的菜品数据存储在 dishes 数组中
    // const dishes = [
    //   {
    //     canteen: 1,
    //     floor: 1,
    //     window: 2,
    //     id: 1,
    //     name: "鱼香肉丝",
    //     discount: 0.8,
    //     price: 20.0,
    //     flavor: 3,
    //     description: "经典川菜，酸辣可口",
    //     photo: "https://cp1.douguo.com/upload/caiku/0/4/3/yuan_041fdcdeeef96417606f570c2d119413.jpg",
    //     comments: [
    //       {
    //         userId: 123,
    //         comment: "这道菜真好吃！",
    //         rating: 5
    //       }
    //     ]
    //   },
    //   {
    //     canteen: 1,
    //     floor: 1,
    //     window: 2,
    //     id: 2,
    //     name: "宫保鸡丁",
    //     discount: 0.6,
    //     price: 18.0,
    //     flavor: 2,
    //     description: "经典川菜，口感麻辣",
    //     photo: "https://ts1.cn.mm.bing.net/th/id/R-C.cae2ad3968a16e670269e7783a3ba707?rik=dVuvO9%2f6rkQFKQ&riu=http%3a%2f%2fupload4.95171.cn%2farticle%2f20131115%2f11.15%E5%AE%AB%E4%BF%9D%E9%B8%A1%E4%B8%81_%E5%89%AF%E6%9C%AC.jpg&ehk=gQpe%2bORIqr9Y4JMmYLT9Ztk%2btVyPoc1OufH3KNYgsrQ%3d&risl=&pid=ImgRaw&r=0",
    //     comments: [
    //       {
    //         userId: 789,
    //         comment: "鸡肉很嫩，味道很棒！",
    //         rating: 5
    //       }
    //     ]
    //   },

    //   {
    //     canteen: 2,
    //     floor: 1,
    //     window: 3,
    //     id: 6,
    //     name: "红烧肉",
    //     discount: 1.0, // 折扣为1表示没有折扣
    //     price: 30.0,
    //     flavor: 4,
    //     description: "经典家常菜，肥而不腻",
    //     photo: "https://cp1.douguo.com/upload/caiku/d/a/e/yuan_dac591f540688c3b7afb971638ec46de.jpg",
    //     comments: [
    //       { userId: 222, comment: "红烧肉很入味，肉质很嫩！", rating: 4 }
    //     ]
    //   },
    //   {
    //     canteen: 3,
    //     floor: 2,
    //     window: 1,
    //     id: 7,
    //     name: "麻婆豆腐",
    //     discount: 0.9,
    //     price: 15.0,
    //     flavor: 3,
    //     description: "川菜经典，麻辣鲜香",
    //     photo: "https://ts1.cn.mm.bing.net/th/id/R-C.deb7ea08ef2c366183f52893e518c242?rik=vuCUOQ0Z1pFQjQ&riu=http%3a%2f%2fpic.616pic.com%2fys_bnew_img%2f00%2f45%2f06%2f3cwDvMLIW0.jpg&ehk=KiEAMzmbdyN%2fe2IVSWWPedFWn4qZXWDTMGBIMsUWLmg%3d&risl=&pid=ImgRaw&r=0",
    //     comments: [
    //       { userId: 444, comment: "喜欢吃辣的可以尝试一下！", rating: 4 }
    //     ]
    //   },
    //   {
    //     canteen: 4,
    //     floor: 1,
    //     window: 2,
    //     id: 8,
    //     name: "清汤抄手",
    //     discount:1,
    //     price: 15,
    //     flavor: 5,
    //     description: "经典美味的清汤抄手，口感鲜美",
    //     photo: "https://st-cn.meishij.net/rs/123/120/10342623/n10342623_159356994705680.jpg",
    //     comments: [
    //       { userId: 666, comment: "抄手皮薄馅大，非常美味！", rating: 4 }
    //     ]
    //   }

    //   // 其他菜品数据...
    // ];

    return (
    <ImageBackground source={require('../images/home.png')} style={styles.background}>
      <View style={styles.screenContainer}>
      <View style={styles.container}>
        {/* <Text style={styles.text1}>今日菜品</Text> */}
    
        <View style={styles.cardContainer}>
          {dishes.map((dish) => {
            const { canteen, floor, window } = dish;
            const location = `位置：餐厅${canteen}，${floor}楼，${window}号窗口`;
            // const firstComment = dish.comments.length > 0 ? dish.comments[0].comment : '';
    
            return (
              <View key={dish.id} style={styles.card}>
                <Image source={{ uri: dish.photo }} style={styles.image} />
                <View style={styles.cardContent}>
                <View style={styles.namePriceContainer}>
                <Text style={styles.name}>{dish.name}</Text>
                {dish.discount !== 1 ? (
                  <View style={styles.priceContainer}>
                    <Text style={styles.discountPrice}>￥{(dish.price * dish.discount).toFixed(2)}</Text>
                    <Text style={styles.originalPrice}>￥{dish.price.toFixed(2)}</Text>
                  </View>
                ) : (
                  <Text style={styles.discountPrice}>￥{dish.price.toFixed(2)}</Text>
                )}
              </View>
                  {/* <Text style={styles.name}>{dish.name}</Text>
                  {dish.discount !== 1 ? (
                    <View style={styles.priceContainer}>
                      <Text style={styles.discountPrice}>￥{(dish.price * dish.discount).toFixed(2)}</Text>
                      <Text style={styles.originalPrice}>￥{dish.price.toFixed(2)}</Text>
                    </View>
                  ) : (
                    <Text style={styles.discountPrice}>￥{dish.price.toFixed(2)}</Text>
                  )} */}
                  <Text style={styles.location}>{location}</Text>
                  <Text style={styles.description}>口味：{dish.description}</Text>
                  {/* <Text style={styles.comment}>热门评论：{firstComment}</Text> */}
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={this.handleRecommendAgain}>
      <Text style={styles.buttonText}>换一轮</Text>
    </TouchableOpacity>
  </View>
</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30
  },
  text1: {
    fontSize: 30,
    color: theme.colors.black,
    textAlign: 'left'
  },
  background:{
    flex: 1,
    resizeMode: 'cover',
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
    padding: 10,
    backgroundColor: theme.colors.white,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 15,
    color: theme.colors.gray,
    textDecorationLine: 'line-through',
  },
  location: {
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: 5,
  },
  comment: {
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: 5,
  },
  namePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop:20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});


export default EvecommandScreen;