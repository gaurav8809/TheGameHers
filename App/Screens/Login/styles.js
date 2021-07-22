import {StyleSheet} from 'react-native';
import Colors from '../../Helper/Colors';
import {hp, ValueFor, wp} from '../../Helper/ResponsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  rememberMeParent: {
    marginTop: hp(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(ValueFor(30.5, 31.5)),
  },
  linkView: {
    // position: 'absolute',
    // paddingBottom: hp(ValueFor(2.5, 1)),
    marginTop: hp(ValueFor(8, 5)),
    marginBottom: hp(2),
    backgroundColor: 'white',
  },
});
