import {StyleSheet} from 'react-native';
import {hp, normalize, ValueFor, wp} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';

export default StyleSheet.create({
  container: {
    marginTop: hp(2),
  },
  logo: {
    resizeMode: 'contain',
    height: hp(7),
    width: wp(60),
  },
  labelStyle: {
    fontFamily: 'FilsonPro-Regular',
    color: Colors.DARK_BLUE_TEXT,
    fontSize: normalize(12),
  },
  textInputView: {
    marginTop: hp(ValueFor(1, 0.5)),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputStyle: {
    paddingBottom: ValueFor(4, 5),
    paddingLeft: 0,
    height: hp(ValueFor(3, 5)),
    color: Colors.DARK_BLUE_TEXT,
    fontSize: normalize(16),
    fontFamily: 'FilsonPro-Regular',
    width: '93%',
  },
  placeholderStyle: {
    color: Colors.GRAY,
    fontFamily: 'FilsonPro-Regular',
  },
  iconStyle: {
    position: 'absolute',
    right: 0,
  },
  borderLine: {
    marginTop: hp(1),
    height: hp(0.1),
    backgroundColor: Colors.GRAY,
  },
  errorStyle: {
    marginTop: hp(0.2),
    opacity: 0,
  },
});
