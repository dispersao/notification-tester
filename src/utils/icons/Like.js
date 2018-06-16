import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Like:{
    width: 20,
    height: 20
  }
});

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

const Like = (props) => {
  return(
    <Svg style={styles.Like} viewBox="0 0 100 125">
         <Path d="M79.35,34.75H63.07V20.1A12.21,12.21,0,0,0,50.87,7.9H49.08a7,7,0,0,0-7,7V26.77a22.1,22.1,0,0,1-5.2,13.7L34.1,42.64a4,4,0,0,0-3.41-1.94H10.23a4,4,0,0,0-4,4V88.1a4,4,0,0,0,4,4H30.69a4,4,0,0,0,4-4V86.9h42A12.61,12.61,0,0,0,89.17,76.36l4.39-25.1a13.57,13.57,0,0,0-.23-5.85A14.52,14.52,0,0,0,79.35,34.75ZM26.69,84.1H14.23V48.7H26.69Zm59-34.19L81.28,75a4.64,4.64,0,0,1-4.6,3.89h-42V52.34l7.46-5.84a4,4,0,0,0,.61-.59,30.21,30.21,0,0,0,7.32-19.14V15.9h.79a4.2,4.2,0,0,1,4.2,4.2V38.75a4,4,0,0,0,4,4H79.35a6.51,6.51,0,0,1,6.27,4.78A5.62,5.62,0,0,1,85.68,49.91Z"/>
 </Svg>
  )
}

export default Like;
