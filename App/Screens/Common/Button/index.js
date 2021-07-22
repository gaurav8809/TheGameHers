import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import {centerText, normalize, wp} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';
import FilsonProRegularText from '../Custom/FilsonProRegularText';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = (props) => {
  let {
    label = null,
    leftIcon = null,
    style = {},
    color = Colors.HOT_PINK,
    textStyle = {},
    textColor = Colors.WHITE,
    activeOpacity = 0,
    disable = false,
    onPress = () => {},
  } = props;

  return (
    <TouchableOpacity
      disable={disable}
      style={[
        styles.container,
        style,
        {
          backgroundColor: disable ? Colors.DISABLE_GRAY : color,
        },
      ]}
      activeOpacity={disable ? 1 : activeOpacity}
      onPress={onPress}>
      {leftIcon && (
        <View style={{...centerText, ...styles.leftIconView}}>
          <Icon
            name={leftIcon.name}
            type={leftIcon.type}
            size={leftIcon?.size ?? wp(7)}
            style={[leftIcon.style]}
            color={leftIcon?.color ?? Colors.WHITE}
            onPress={leftIcon.onPress}
          />
        </View>
      )}
      <FilsonProRegularText
        color={textColor}
        fontSize={18}
        style={[textStyle]}>
        {label}
      </FilsonProRegularText>
    </TouchableOpacity>
  );
};

export default Button;
