import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import PostView from './PostView';
// import NewsView from './NewsView';

const styles=StyleSheet.create({
  FeedView: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
});

const FeedView = (props) => {
    if(props.error){
      return <Text>{error}</Text>
    } else if(props.data && props.data.data && props.data.data.length){
      return (
        <FlatList
          renderItem={({item, index, separator}) => (
               <PostView post={item}/>
            //   {item.type === 'news' &&
            //     <NewsView post={item}
            //   }
            )}
          data={props.data.data}
        />
      )
    } else {
      return <Text>Loading</Text>
    }
}

export default FeedView;
