import React from 'react';
import { StyleSheet, Text, View, Picker, AppState } from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notifications';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#33ff33',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  picker: {
    width: 100,
  }
});

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      seconds: 5
    }
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState){
    if(appState === 'background'){
      console.log(this.state.seconds);
      PushNotification.localNotificationSchedule({
        message: "My notification Message",
        date: new Date(Date.now() + this.state.seconds * 1000).toISOString()
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Choose your notification time in seconds</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={(seconds) => this.setState({ seconds })}>
            <Picker.Item label='5' value={5}/>
            <Picker.Item label='10' value={10}/>
            <Picker.Item label='15' value={15}/>
          </Picker>
          <PushController/>
      </View>
    );
  }
}
