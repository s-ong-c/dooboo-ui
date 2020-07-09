import { Button, View } from 'react-native';
import React, { ReactElement, useState } from 'react';

import { DividerVertical } from './Helper';
const emptyFunction = () => {};
export default function Color(): ReactElement {
  return (
    <View>
      <Button color="#17BF63" onPress={emptyFunction} title="Press me" />
      <DividerVertical />
      <Button color="#F45D22" onPress={emptyFunction} title="Press me" />
      <DividerVertical />
      <Button color="#794BC4" onPress={emptyFunction} title="Press me" />
      <DividerVertical />
      <Button color="#E0245E" onPress={emptyFunction} title="Press me" />
    </View>
  );
}
