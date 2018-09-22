import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  MessageContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#dedede',
    minHeight: 200,
    maxHeight: 350,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  PostMessage:{
    fontSize: 24,
    backgroundColor: '#ffaaaa',
  },
  Photo:{
    width: 100,
    height: 100
  }
});

const PostMessage = ({post}) => {
  console.log(post.photos && post.photos.length && post.photos[0]);
  return (
    <View style={styles.MessageContainer}>
      <Text adjustsFontSizeToFit allowFontScaling minimumFontScale={0.1} style={styles.PostMessage}>{post.message}</Text>
      {post.photos && post.photos.length > 0 &&
        <Image style={styles.Photo} source={{uri:post.photos[0]}} />
      }
    </View>
  )
}

export default PostMessage;
