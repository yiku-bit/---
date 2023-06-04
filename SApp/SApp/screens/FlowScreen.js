import React from 'react';
import { View, Text, StyleSheet ,ImageBackground} from 'react-native';
import { theme } from '../constants';
import ModalDropdown from 'react-native-modal-dropdown';

class FlowScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    canteen: 1,
    floor: 1,
    humanTraffics: [],
  };

  componentDidMount() {
    this.fetchHumanTraffics();
  }

  fetchHumanTraffics = () => {
    const { canteen, floor } = this.state;

    fetch(`http://47.94.160.129:8080/api/home_page/traffic_monitoring/?canteen=${canteen}&floor=${floor}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === 200) {
          const { humanTraffics } = data.data;
          this.setState({
            humanTraffics,
          });
        } else {
          console.error('Request returned an error:', data.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  renderTrafficWindow = (window) => {
    const { window: windowNumber, humanTraffic } = window;
    let color = 'green';
    let description = '空闲';

    if (humanTraffic > 5 && humanTraffic <= 10) {
      color = 'yellow';
      description = '正常';
    } else if (humanTraffic > 10) {
      color = 'red';
      description = '繁忙';
    }

    return (
      <View style={styles.trafficWindow}>
        <Text style={styles.windowNumber}>{`窗口${windowNumber}`}</Text>
        <View style={[styles.progressBar, { backgroundColor: color, width: `${(humanTraffic / 20) * 100}%` }]} />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.humanTraffic}>{`${humanTraffic}人`}</Text>
      </View>
    );
  };

  handleCanteenChange = (index, value) => {
    this.setState({ canteen: index + 1 }, this.fetchHumanTraffics);
  };

  handleFloorChange = (index, value) => {
    this.setState({ floor: index + 1 }, this.fetchHumanTraffics);
  };

  render() {
    const { canteen, floor, humanTraffics } = this.state;
    const canteenOptions = ['北食堂', '清真食堂', '南食堂', '东食堂','',''];
    const floorOptions = ['1', '2', '3','',''];

    return (
      <ImageBackground source={require('../images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <ModalDropdown
            options={canteenOptions}
            defaultValue={canteenOptions[canteen - 1]}
            onSelect={this.handleCanteenChange}
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownMenu}
            dropdownTextStyle={styles.dropdownMenuItemText}
          />
          <ModalDropdown
            options={floorOptions}
            defaultValue={floorOptions[floor - 1]}
            onSelect={this.handleFloorChange}
            style={styles.dropdown}
           textStyle={styles.dropdownText}
dropdownStyle={styles.dropdownMenu}
dropdownTextStyle={styles.dropdownMenuItemText}
/>
</View>
<View style={styles.trafficWindowsContainer}>
{humanTraffics.map((window, index) => (
<View key={index} style={styles.trafficWindowRow}>
{this.renderTrafficWindow(window)}
</View>
))}
</View>
</View>
</ImageBackground>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
background:{
  flex: 1,
  resizeMode: 'cover',
},
dropdownContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
dropdown: {
width: 150,
paddingVertical: 10,
paddingHorizontal: 15,
borderWidth: 1,
borderRadius: 5,
borderColor: '#ccc',
},
dropdownText: {
fontSize: 16,
color: '#000',
},
dropdownMenu: {
width: 150,
borderRadius: 5,
borderColor: '#ccc',
borderWidth: 1,
},
dropdownMenuItemText: {
fontSize: 16,
color: '#000',
paddingHorizontal: 10,
paddingVertical: 8,
},
trafficWindowsContainer: {
flexDirection: 'column',
},
trafficWindowRow: {
flexDirection: 'row',
justifyContent: 'center',
marginBottom: 20,
},
trafficWindow: {
flex: 1,
marginHorizontal: 20,
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
borderWidth: 2,
borderColor: '#ccc',
},
windowNumber: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 5,
color: theme.colors.primary,
},
progressBar: {
height: 18,
marginBottom: 5,
},
description: {
fontSize: 20,
color: '#888',
},
humanTraffic: {
fontSize: 20,
fontWeight: 'bold',
},
});

export default FlowScreen;
