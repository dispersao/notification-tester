import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PostMessage from './PostMessage';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';


const styles= StyleSheet.create({
  PostContainer:{
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 8
  }
});

const PostView = ({post}) => {
  return (
    <View style={styles.PostContainer}>
      <PostHeader post={post} />
      <PostMessage post={post} />
      <PostFooter post={post} />
    </View>
  )
}

export default PostView;
