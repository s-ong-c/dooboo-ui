import { Button, View } from 'react-native';
import React, { ReactElement, useState } from 'react';

const emptyFunction = () => {};
export default function Disabled(): ReactElement {
  const onPress = () => {
    console.error('Disabled button should not trigger onPress!');
  };

  return (
    <View>
      <Button disabled onPress={onPress} title="Disabled button" />;
    </View>
  );
}
