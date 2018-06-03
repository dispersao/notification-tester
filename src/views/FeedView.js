import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import PostView from './PostView';
// import NewsView from './NewsView';

const styles=StyleSheet.create({
  FeedView: {
     paddingVertical: 8,
     paddingHorizontal:8,
  }
});

const FeedView = ({error, isLoading, data}) => {
    if(error){
      return <Text>{error.message}</Text>
    } else if(data && data.data && data.data.length){
      return (
        <FlatList contentContainerStyle={styles.FeedView}
          renderItem={({item, index, separator}) => (
               <PostView post={item}/>
            )}
          data={data.data}
        />
      )
    } else {
      return <Text>Loading</Text>
    }
}

export default FeedView;
