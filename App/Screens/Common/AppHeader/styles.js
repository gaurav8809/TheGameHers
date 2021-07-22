import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Helper/ResponsiveScreen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: hp(7),
    width: wp(60),
  },
});
