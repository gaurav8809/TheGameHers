import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../Common/AppHeader';
import TwoColorText from '../Common/TwoColorText';
import {hp, normalize, ValueFor, wp} from '../../Helper/ResponsiveScreen';
import BottomCurvedView from '../Common/BottomCurvedView';
import TextInput from '../Common/TextInput';
import Colors from '../../Helper/Colors';
import Icon from 'react-native-dynamic-vector-icons';
import FilsonProRegularText from '../Common/Custom/FilsonProRegularText';
import Button from '../Common/Button';
import {
  resetErrorField,
  validateEmail,
  validatePassword,
  validateRequireField,
} from '../../Helper/Validation';
import {LoginWithFB, LoginWithGoogle} from "../../AppState/Actions/systemAction";

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const {appUser} = useSelector((state) => state.appReducer);

  // State Declaration //
  let [form, setForm] = useState({
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
      secure: true,
    },
    tos: {
      value: true,
    },
  });

  const onChangeFormValue = (key, value, innerKey = 'value') => {
    setForm({
      ...form,
      [key]: {
        ...form[key],
        [innerKey]: value,
      },
    });
  };

  const checkValidation = () => {
    // Declaration //
    let tempForm = form;
    let result = true;

    // Reset Form Errors //
    let req = resetErrorField(form);
    setForm({...req});

    // Validation Logic //
    let isRequireArray = validateRequireField(form);
    let isPasswordValidate = validatePassword(form.password.value);

    if (isRequireArray.length) {
      isRequireArray.map((i) => {
        tempForm[i].error = 'Please fill required filed';
      });
      result = false;
    }
    if (result && !validateEmail(form.email.value)) {
      tempForm.email.error = 'Incorrect email format';
      result = false;
    }
    if (result && isPasswordValidate !== '') {
      tempForm.password.error = isPasswordValidate;
      result = false;
    }

    setForm({...tempForm});
    return result;
  };

  const onPressSignUp = () => {
    if (!checkValidation()) {
      return;
    }
  };

  const onPressGoogleSingUp = () => {
    // if (!checkValidation()) {
    //   return;
    // }
    dispatch(LoginWithGoogle()).then(() => alert('Google login Success'));
  };

  const onPressFBSingUp = () => {
    // if (!checkValidation()) {
    //   return;
    // }
    dispatch(LoginWithFB()).then(() => alert('Fb login Success'));
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <TwoColorText
        fontFamily={'FilsonSoft-Heavy'}
        textArray={['WELCOME TO THE', '*', 'GAME', 'HER', 'S']}
        viewStyle={{alignSelf: 'center', width: wp(70)}}
      />
      <TwoColorText
        fontSize={normalize(18)}
        textArray={['Meet', ' * ', 'Chat', ' * ', 'Play']}
        viewStyle={{top: hp(-0.5)}}
      />
      <BottomCurvedView>
        <TextInput
          label={{
            text: 'Email Address*',
            ...(form.email?.error && {color: Colors.ERROR_RED}),
          }}
          placeholder={'example@gmail.com'}
          value={form.email.value}
          onChangeText={(text) => onChangeFormValue('email', text)}
          icon={
            form.email?.value !== '' &&
            form.email?.error === '' && {
              name: 'check',
              type: 'Feather',
            }
          }
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          error={
            form.email?.error !== '' && {
              message: form.email.error,
            }
          }
          borderColor={Colors[form.email?.error !== '' ? 'ERROR_RED' : 'GRAY']}
        />

        <TextInput
          label={{
            text: 'Password*',
            ...(form.password?.error && {color: Colors.ERROR_RED}),
          }}
          placeholder={'********'}
          value={form.password.value}
          onChangeText={(text) => onChangeFormValue('password', text)}
          icon={{
            name: form.password.secure ? 'eye-slash' : 'eye',
            type: 'FontAwesome',
            color:
              Colors[form.password.secure ? 'LIGHT_DISABLE' : 'DARK_BLUE_TEXT'],
            onPress: () =>
              onChangeFormValue('password', !form.password.secure, 'secure'),
          }}
          textContentType={'password'}
          secureTextEntry={form.password.secure}
          error={
            form.password?.error !== '' && {
              message: form.password.error,
            }
          }
          borderColor={
            Colors[form.password?.error !== '' ? 'ERROR_RED' : 'GRAY']
          }
        />

        <View style={styles.tosTextView}>
          <Icon
            name={form.tos.value ? 'check-box' : 'check-box-outline-blank'}
            type={'MaterialIcons'}
            size={wp(7)}
            style={{left: -2}}
            color={Colors[form.tos.value ? 'CHECKBOX_HOT_PINK' : 'GRAY']}
            onPress={() => onChangeFormValue('tos', !form.tos.value)}
          />
          <FilsonProRegularText style={{left: wp(1)}}>
            {'I have read and agree with'}
            <FilsonProRegularText
              color={Colors.FONTS_HOT_PINK}
              style={{top: hp(0.2)}}
              activeOpacity={0}>
              {' Terms of Service'}
            </FilsonProRegularText>
          </FilsonProRegularText>
        </View>

        <View style={{marginTop: hp(2)}}>
          <Button
            label={'Sign up'}
            disable={!form.tos.value}
            // color={Colors.DISABLE_GRAY}
            onPress={onPressSignUp}
          />

          <View style={styles.orContainer}>
            <View style={[styles.orLines, {right: wp(2)}]} />
            <View style={styles.orView}>
              <Text style={{fontWeight: 'bold', color: Colors.DISABLE_GRAY}}>
                OR
              </Text>
            </View>
            <View style={[styles.orLines, {left: wp(2)}]} />
          </View>

          <Button
            label={'Sign up with Facebook'}
            color={Colors.FACEBOOK_BLUE}
            leftIcon={{
              name: 'facebook-f',
              type: 'FontAwesome',
            }}
            onPress={onPressFBSingUp}
          />
          <Button
            label={'Sign up with Google'}
            color={Colors.GOOGLE_BLUE}
            leftIcon={{
              name: 'google',
              type: 'AntDesign',
            }}
            onPress={onPressGoogleSingUp}
          />
          <Button
            label={'Sign up with Apple'}
            color={Colors.APPLE_BLACK}
            leftIcon={{
              name: 'apple1',
              type: 'AntDesign',
            }}
          />
        </View>

        <View style={styles.linkView}>
          <FilsonProRegularText style={{textAlign: 'center'}}>
            {'Already have any account?'}
            <FilsonProRegularText
              color={Colors.FONTS_HOT_PINK}
              style={{top: hp(ValueFor(0.2, 0.4))}}
              activeOpacity={0}
              onPress={() => navigation.goBack()}>
              {' Login'}
            </FilsonProRegularText>
          </FilsonProRegularText>
        </View>
      </BottomCurvedView>
    </View>
  );
};

export default Signup;
