import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import AppHeader from '../Common/AppHeader';
import TwoColorText from '../Common/TwoColorText';
import {hp, wp} from '../../Helper/ResponsiveScreen';
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

const Login = ({navigation}) => {
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
    rememberMe: {
      value: false,
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

  const onPressLogin = () => {
    if (!checkValidation()) {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <TwoColorText
        fontFamily={'FilsonSoft-Heavy'}
        textArray={['WELCOME TO THE', '*', 'GAME', 'HER', 'S']}
        viewStyle={{alignSelf: 'center', width: wp(70)}}
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
            validateEmail(form.email.value) &&
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

        <View style={styles.rememberMeParent}>
          <View style={styles.rememberMeView}>
            <Icon
              name={
                form.rememberMe.value ? 'check-box' : 'check-box-outline-blank'
              }
              type={'MaterialIcons'}
              size={wp(7)}
              style={{left: -2}}
              color={
                Colors[form.rememberMe.value ? 'CHECKBOX_HOT_PINK' : 'GRAY']
              }
              onPress={() =>
                onChangeFormValue('rememberMe', !form.rememberMe.value)
              }
            />
            <FilsonProRegularText
              onPress={() =>
                onChangeFormValue('rememberMe', !form.rememberMe.value)
              }>
              Remember Me
            </FilsonProRegularText>
          </View>
          <FilsonProRegularText
            activeOpacity={0}
            color={Colors.FONTS_HOT_PINK}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </FilsonProRegularText>
        </View>

        <View style={{marginTop: hp(2)}}>
          <Button label={'Login'} onPress={onPressLogin} />
          <Button
            label={'Login with Facebook'}
            color={Colors.FACEBOOK_BLUE}
            leftIcon={{
              name: 'facebook-f',
              type: 'FontAwesome',
            }}
          />
          <Button
            label={'Login with Google'}
            color={Colors.GOOGLE_BLUE}
            leftIcon={{
              name: 'google',
              type: 'AntDesign',
            }}
          />
          <Button
            label={'Login with Apple'}
            color={Colors.APPLE_BLACK}
            leftIcon={{
              name: 'apple1',
              type: 'AntDesign',
            }}
          />
        </View>

        <View style={styles.linkView}>
          <FilsonProRegularText style={{textAlign: 'center'}}>
            {"Don't have an account?"}
            <FilsonProRegularText
              color={Colors.FONTS_HOT_PINK}
              style={{top: hp(0.2)}}
              activeOpacity={0}
              onPress={() => navigation.navigate('Signup')}>
              {' Sign up'}
            </FilsonProRegularText>
          </FilsonProRegularText>
        </View>
      </BottomCurvedView>
    </View>
  );
};

export default Login;
