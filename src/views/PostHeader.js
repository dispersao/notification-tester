import React from 'react';
import {Avatar} from 'react-native-elements';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8
  },
  headerText: {
    fontSize: 18,
    padding:0,
    margin:0,
  },
  headerName: {
    fontWeight: 'bold'
  },
  headerDate: {
    color: '#434343',
    fontSize: 15
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 8
  }
});

const PostHeader =({post}) => {
  return (
    <View style={styles.headerContainer}>
      <Avatar
        medium
        rounded
        source={{uri: post.author.image}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>
          <Text style={styles.headerName}>{post.author.name}</Text>
          <Text> postou:</Text>
        </Text>
        <Text style={styles.headerDate}>{timeToString(post.created_time)}</Text>
      </View>
    </View>
  )
}

timeToString=(time)=> {
  var now = new Date();
  const thisMinute = 60000;
  const thisHour = thisMinute * 60;
  const today = thisHour * 24;

  const timeSpread = now.getTime() - time;

  if(timeSpread < thisMinute){
    return 'now';
  }
  else if(timeSpread < thisHour){
    return `${Math.round(timeSpread / thisMinute)} mins ago`;
  }
  else if(timeSpread < today){
    return `${Math.round(timeSpread / thisHour)} hours ago`;
  }
  else {
    const d = new Date(time);
    return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  }

}

export default PostHeader;
