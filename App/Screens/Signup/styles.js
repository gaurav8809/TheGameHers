import {StyleSheet} from 'react-native';
import Colors from '../../Helper/Colors';
import {centerText, hp, ValueFor, wp} from '../../Helper/ResponsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  tosTextView: {
    marginTop: hp(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink'
  },
  linkView: {
    // position: 'absolute',
    // paddingBottom: hp(ValueFor(2.5, 1)),
    marginTop: hp(ValueFor(8, 5)),
    marginBottom: hp(2),
    backgroundColor: 'white',
  },
  orContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    ...centerText,
  },
  orView: {
    borderRadius: 100,
    borderColor: Colors.DISABLE_GRAY,
    borderWidth: 2,
    height: wp(9.5),
    width: wp(9.5),
    ...centerText,
  },
  orLines: {
    height: hp(0.15),
    width: wp(30),
    backgroundColor: Colors.DISABLE_GRAY,
  },
});
