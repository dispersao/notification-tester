import React from 'react';
import {Avatar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';


const styles= StyleSheet.create({
  PostContainer:{
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});

import PostHeader from './PostHeader';
const PostView = ({post}) => {
  console.log(post);
  return (
    <View style={styles.PostContainer}>
      <PostHeader post={post} />
      <Text>{post.message}</Text>
    </View>
    // <View>
    //   <Avatar
    //     small
    //     rounded
    //     source={{uri: post.author.image}}
    //     onPress={() => console.log("Works!")}
    //     activeOpacity={0.7}
    //   />
    //
    //   <Text>{post.author.name}</Text>
    // </View>
  )
}

export default PostView;
