import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import {wp} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';
import FilsonProRegularText from '../Custom/FilsonProRegularText';

const TextInput = (props) => {
  let {
    // TextInput Props //
    value = '',
    placeholder = '',
    placeholderTextColor = Colors.GRAY,
    borderColor = Colors.GRAY,
    autoCapitalize = 'none',
    textContentType = 'none',
    keyboardType = 'default',
    secureTextEntry = false,

    // Label Props //
    label = null,

    // Icon Props //
    icon = null,

    // Error Props //
    error = null,

    // Callbacks //
    onChangeText = () => {},
  } = props;

  return (
    <View style={styles.container}>
      {label && (
        <FilsonProRegularText color={label?.color ?? Colors.DARK_BLUE_TEXT}>
          {label.text}
        </FilsonProRegularText>
      )}
      <View style={styles.textInputView}>
        <RNTextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          placeholderStyle={[styles.placeholderStyle]}
          value={value}
          onChangeText={onChangeText}
          style={[styles.textInputStyle]}
          autoCapitalize={autoCapitalize}
          textContentType={textContentType}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {icon && (
          <Icon
            name={icon.name}
            type={icon.type}
            size={icon?.size ?? wp(5.5)}
            style={[icon.style, styles.iconStyle]}
            color={icon?.color ?? Colors.DARK_BLUE_TEXT}
            onPress={icon.onPress}
          />
        )}
      </View>
      <View style={[styles.borderLine, {backgroundColor: borderColor}]} />
      <FilsonProRegularText
        color={error?.color ?? Colors.ERROR_RED}
        style={[
          error.style,
          styles.errorStyle,
          error?.message && {opacity: 1},
        ]}>
        {error?.message ?? 's'}
      </FilsonProRegularText>
    </View>
  );
};

export default TextInput;
