import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactElement, useRef } from 'react';

import { useHover } from './hooks';

function HoverAction(): ReactElement {
  const ref = useRef(null);
  const isHovered = useHover(ref);
  console.log(isHovered);
  return (
    <TouchableOpacity>
      <Text ref={ref} style={[isHovered && styles.linkHover]}>
        aa
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  linkHover: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});
// const styles = StyleSheet.create({
//   logo: {
//     height: 80,
//   },
//   header: {
//     backgroundColor: '#222',
//     padding: 20,
//   },
//   title: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     marginVertical: '1em',
//     textAlign: 'center',
//   },
//   intro: {
//     fontSize: '1.125rem',
//     marginVertical: '1em',
//     textAlign: 'center',
//   },
//   code: {
//     fontFamily: 'monospace, monospace',
//   },
//   link: {
//     color: 'blue',
//   },
//   linkHover: {
//     color: 'red',
//     textDecorationLine: 'underline',
//   },
// });

export default HoverAction;
