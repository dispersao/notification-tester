import React from 'react';
import {Avatar} from 'react-native-elements';
import {View, Text} from 'react-native';

const PostView = ({post}) => {
  console.log(post);
  return (
    <View>
      <Avatar
        small
        rounded
        source={{uri: post.author.image}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Text>{post.author.name}</Text>
    </View>
  )
}

export default PostView;
