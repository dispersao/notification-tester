import React from 'react';
import { Text, FlatList } from 'react-native';

const FeedView = (props) => {
    if(props.error){
      return <Text>{error}</Text>
    } else if(props.data && props.data.data && props.data.data.length){
      return (
        <FlatList
          renderItem={({item, index, separator}) => (
            <Text key={index}>{item.message}</Text>
          )}
          data={props.data.data}
        />
      )
    } else {
      return <Text>Loading</Text>
    }
}

export default FeedView;
