import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity  } from 'react-native';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

class PopudishScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    dishes: [], // Store the fetched dishes data
  };

  componentDidMount() {
    this.fetchPopularDishes(0, 100);
  }

  fetchPopularDishes = (lastId, number) => {
    fetch(`http://47.94.160.129:8080/api/home_page/popular?last_id=${lastId}&number=${number}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === 1) {
          const dishes = data.data.dishes;
          this.setState(prevState => ({
            dishes: [...prevState.dishes, ...dishes],
          }));
        } else {
          console.error('Request returned an error:', data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  renderDish = (dish) => {
    const { canteen, floor, window, name, discount, price, photo } = dish;
    const location = `位置：餐厅${canteen}，${floor}楼，${window}号窗口`;
  
    return (
      <View style={styles.card}>
        <Image source={{ uri: photo }} style={styles.image} />
        <View style={styles.cardContent}>
          <View style={styles.namePriceContainer}>
            <Text style={styles.name}>{name}</Text>
            {discount !== 1 ? (
              <View style={styles.priceContainer}>
                <Text style={styles.discountPrice}>￥{(price * discount).toFixed(2)}</Text>
                <Text style={styles.originalPrice}>￥{price.toFixed(2)}</Text>
              </View>
            ) : (
              <Text style={styles.discountPrice}>￥{price.toFixed(2)}</Text>
            )}
          </View>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    );
  };

  handleLoadMore = () => {
    const { dishes } = this.state;
    const lastId = dishes.length > 0 ? dishes[dishes.length - 1].id : 0;
    const number = 5;
    this.fetchPopularDishes(lastId, number);
  };

  render() {
    const { dishes } = this.state;
  
    return (
      <View style={styles.screenContainer}>
        <FlatList
          contentContainerStyle={styles.container}
          data={dishes}
          renderItem={({ item }) => this.renderDish(item)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:theme.colors.white,
  },
  container: {
    padding: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '45%',
    margin: 10,
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
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
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
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});

export default PopudishScreen;

