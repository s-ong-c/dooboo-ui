import { StyleSheet, View } from 'react-native';

import React from 'react';

const DividerHorizontal = () => <View style={styles.horizontalDivider} />;
const DividerVertical = () => <View style={styles.verticalDivider} />;

const styles = StyleSheet.create({
  horizontalDivider: {
    width: '0.6rem',
  },
  verticalDivider: {
    height: '1.3125rem',
  },
});

export { DividerHorizontal, DividerVertical };
