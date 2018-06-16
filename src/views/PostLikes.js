import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Like from '../utils/icons/Like';

const styles = StyleSheet.create({
  Footer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  LikeContainer:{
    padding: 5,
    borderRadius: 20,
    width: 30,
    height: 30,
    backgroundColor: '#dddddd'
  },
  LikeText: {
    fontSize: 16,
    paddingLeft: 8,
  }
});

const PostLikes = ({post}) => {
  return (
    <View style={styles.Footer}>
      <View style={styles.LikeContainer} >
        <Like/>
      </View>
      <Text style={styles.LikeText}>{post.likes}</Text>
    </View>
  )
}

export default PostLikes;
