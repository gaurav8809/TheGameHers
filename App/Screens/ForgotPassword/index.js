import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppHeader from '../Common/AppHeader';
import {hp, wp} from '../../Helper/ResponsiveScreen';
import BottomCurvedView from '../Common/BottomCurvedView';
import TextInput from '../Common/TextInput';
import Colors from '../../Helper/Colors';
import FilsonProRegularText from '../Common/Custom/FilsonProRegularText';
import Button from '../Common/Button';
import {
  resetErrorField,
  validateEmail,
  validateRequireField,
} from '../../Helper/Validation';
import FilsonSoftHeavyText from '../Common/Custom/FilsonSoftHeavyText';

const ForgotPassword = ({navigation}) => {
  // State Declaration //
  let [form, setForm] = useState({
    email: {
      value: '',
      error: '',
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

    setForm({...tempForm});
    return result;
  };

  const onPressSendLink = () => {
    if (!checkValidation()) {
      return;
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} label={'Forgot Password'} backOption />
      <FilsonSoftHeavyText style={{left: wp(3), marginTop: hp(2.5)}}>
        {"LET'S RECOVER YOUR PASSWORD"}
      </FilsonSoftHeavyText>
      <BottomCurvedView scrollEnabled={false}>
        <View style={{flex: 1}}>
          <FilsonProRegularText fontSize={16} style={{marginTop: hp(1.5)}}>
            We’ll send you an email with a link to reset your password
          </FilsonProRegularText>

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
          />
        </View>
        <Button
          style={styles.sendLinkButton}
          label={'Send Reset Link'}
          onPress={onPressSendLink}
        />
      </BottomCurvedView>
    </View>
  );
};

export default ForgotPassword;
