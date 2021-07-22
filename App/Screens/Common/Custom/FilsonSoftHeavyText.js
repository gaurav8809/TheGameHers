import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../../Helper/Colors';
import {normalize} from '../../../Helper/ResponsiveScreen';

const FilsonSoftHeavyText = (props) => {
  let {
    children,
    style = {},
    color = Colors.WHITE,
    onPress = null,
    activeOpacity = 1,
    fontSize = 24,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <Text
        style={[
          styles.textStyle,
          style,
          {
            color: color,
            fontSize: normalize(fontSize),
          },
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'FilsonSoft-Heavy',
    color: Colors.DARK_BLUE_TEXT,
    fontSize: normalize(12),
  },
});

export default FilsonSoftHeavyText;
