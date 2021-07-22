import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(0.7),
    paddingTop: hp(1),
    // paddingBottom: hp(0),
    paddingHorizontal: wp(5),
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo: {
    resizeMode: 'contain',
    height: hp(7),
    width: wp(60),
  },
});
