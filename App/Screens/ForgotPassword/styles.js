import {StyleSheet} from 'react-native';
import Colors from '../../Helper/Colors';
import {hp} from '../../Helper/ResponsiveScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  sendLinkButton: {
    bottom: hp(3),
    alignSelf: 'center',
    zIndex: 1000,
  },
});
