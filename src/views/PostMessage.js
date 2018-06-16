import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  PostMessage:{
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 8
  }
});

const PostMessage = ({post}) => {
  return (
    <Text style={styles.PostMessage}>{post.message}</Text>
  )
}

export default PostMessage;
