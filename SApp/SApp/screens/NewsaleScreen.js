import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { theme } from '../constants';

class NewsaleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    newDishes: [],
    sellDishes: [],
  };

  componentDidMount() {
    this.fetchNewAndSellDishes();
  }

  fetchNewAndSellDishes = () => {
    fetch('http://47.94.160.129:8080/api/home_page/new_and_sell')
      .then(response => response.json())
      .then(data => {
        if (data.code === 1) {
          const { news, sell } = data.data;
          this.setState({
            newDishes: news,
            sellDishes: sell,
          });
        } else {
          console.error('Request returned an error:', data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  renderDish = (dish) => {
    const { name, discount, price, photo } = dish;
  
    let discountedPrice = price;
    if (discount) {
      discountedPrice = (price * discount).toFixed(2);
    }
  
    return (
      <View style={styles.card}>
        <Image source={{ uri: photo }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>{name}</Text>
          {discount!=1 && (
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{`￥${discountedPrice}`}</Text>
              <Text style={styles.discountedPrice}>{`￥${price.toFixed(2)}`}</Text>
            </View>
          )}
          {discount==1 && (
            <Text style={styles.originalPrice}>{`￥${price.toFixed(2)}`}</Text>
          )}
        </View>
      </View>
    );
  };

  render() {
    const { newDishes, sellDishes } = this.state;

    return (
      <View style={styles.screenContainer}>
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>新品</Text>
          <FlatList
            contentContainerStyle={styles.container}
            data={newDishes}
            renderItem={({ item }) => this.renderDish(item)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.columnTitle}>折扣商品</Text>
          <FlatList
            contentContainerStyle={styles.container}
            data={sellDishes}
            renderItem={({ item }) => this.renderDish(item)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:theme.colors.white,
  },
  columnContainer: {
    flex: 1,
    padding: 20,
  },
  columnTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
    
  },
  card: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor:theme.colors.white,
    elevation: 3,

  },
  image: {
    width: '100%',
       height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    color: theme.colors.gray,
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 14,
    color: theme.colors.primary,
    
  },
});

export default NewsaleScreen;

