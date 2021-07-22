import {StatusBar, StyleSheet, View} from 'react-native';
import {hp, ValueFor} from '../Helper/ResponsiveScreen';
import Colors from '../Helper/Colors';
import React from 'react';
import RootNavigation from './RootNavigation';

const Container = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iosStatusBar}>
        <StatusBar
          barStyle="light-content"
          animated={true}
          backgroundColor={Colors.PRIMARY}
          hidden={false}
        />
      </View>
      <RootNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: Colors.PRIMARY,
  },
  iosStatusBar: {
    marginBottom: hp(ValueFor(1, 2)),
    backgroundColor: Colors.PRIMARY,
    height: ValueFor(44, 0),
  },
});

export default Container;
