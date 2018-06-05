import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Like from '../utils/icons/Like';

const styles = StyleSheet.create({
  Like:{
    width: 15,
    height: 15,
    opacity: 0.5
  }
});

const PostFooter = ({post}) => {
  return (
    <Like style={styles.Like}/>
  )
}

export default PostFooter;
