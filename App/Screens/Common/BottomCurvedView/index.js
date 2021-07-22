import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ValueFor} from '../../../Helper/ResponsiveScreen';

const BottomCurvedView = (props) => {
  let {children = <View />, scrollEnabled = true} = props;

  const CONTAINER = (view) => {
    return scrollEnabled ? (
      <KeyboardAwareScrollView
        scrollEnabled={scrollEnabled}
        behavior={ValueFor('padding', 'height')}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        style={{flex: 1}}
        // contentContainerStyle={{flex: ValueFor(1, 0)}}
      >
        {view}
      </KeyboardAwareScrollView>
    ) : (
      <>{view}</>
    );
  };

  return (
    <View style={styles.container}>
      {CONTAINER(children)}
    </View>
  );
};

export default BottomCurvedView;
