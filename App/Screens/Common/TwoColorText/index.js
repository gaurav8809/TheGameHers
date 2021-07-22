import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {normalize} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';

const TwoColorText = (props) => {
  let {
    textArray = ['The ', 'Game', 'Hers'],
    viewStyle = {},
    style = {},
    fontSize = normalize(30),
    fontFamily = 'FilsonPro-Regular',
  } = props;

  return (
    <View style={[styles.container, viewStyle]}>
      <Text
        style={[
          styles.textStyle,
          style,
          {fontSize: fontSize, fontFamily: fontFamily},
        ]}>
        {textArray.map((i, index) => {
          return (
            <Text
              key={index}
              style={{color: Colors[index % 2 === 0 ? 'WHITE' : 'HOT_PINK']}}>
              {i}
            </Text>
          );
        })}
      </Text>
    </View>
  );
};

export default TwoColorText;
