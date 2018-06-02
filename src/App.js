import React from 'react';
import { StyleSheet, Text, View, Picker, AppState } from 'react-native';
import FeedView from './views/FeedView';
import FetcherFactory from './services/FetcherFactory';

export default class App extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const FetcherFeed = FetcherFactory('/api/feed')(FeedView)
    return (
      <View>
        <FetcherFeed/>
      </View>
    );
  }
}
