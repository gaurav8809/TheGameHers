import {StyleSheet} from 'react-native';
import {centerText, hp, ValueFor, wp} from '../../../Helper/ResponsiveScreen';
import Colors from '../../../Helper/Colors';

export default StyleSheet.create({
  container: {
    ...centerText,
    flexDirection: 'row',
    marginTop: hp(2.5),
    minHeight: hp(ValueFor(6.5, 7.5)),
    width: wp(90),
    backgroundColor: Colors.HOT_PINK,
    borderRadius: 10,
  },
  leftIconView: {
    position: 'absolute',
    left: wp(3),
    width: wp(10),
  },
});
