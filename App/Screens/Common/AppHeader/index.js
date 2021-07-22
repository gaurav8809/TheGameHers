import React from 'react';
import {View, Image} from 'react-native';
import {APP_LOGO} from '../../../Images';
import styles from './styles';
import Icon from 'react-native-dynamic-vector-icons';
import {wp} from '../../../Helper/ResponsiveScreen';
import FilsonProRegularText from '../Custom/FilsonProRegularText';
import Colors from '../../../Helper/Colors';

const AppHeader = (props) => {
  let {backOption = false, label = null, navigation} = props;

  return (
    <View style={styles.container}>
      {backOption && (
        <Icon
          name="chevron-left"
          type="Feather"
          size={wp(8)}
          color="white"
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: wp(1),
          }}
        />
      )}
      {label ? (
        <FilsonProRegularText color={Colors.WHITE} fontSize={17}>
          {label}
        </FilsonProRegularText>
      ) : (
        <Image source={APP_LOGO} style={styles.logo} />
      )}
    </View>
  );
};

export default AppHeader;
