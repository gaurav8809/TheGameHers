import {StyleSheet} from 'react-native';
import {hp, normalize, wp} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';

export default StyleSheet.create({
  container: {
    marginTop: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.WHITE,
    fontSize: normalize(30),
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Heavy',
  },
});
