import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React, { useRef } from 'react';

import styled from 'styled-components/native';
import { useHover } from '../HoverAction/hooks';

const StyledButton = styled.View`
  align-self: center;
  width: 320px;
  height: 52px;
  border-color: blue;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const StyledDisabled = styled(StyledButton)`
  background-color: #cccccc;
  border-color: rgb(200, 200, 200);
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #069ccd;
`;

const StyledDisabledText = styled(StyledText)`
  color: #969696;
`;

interface Props {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabledTextStyle?: TextStyle;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
  touchableOpacityProps?: TouchableOpacityProps;
  isHoverAble?: boolean;
}

function Button(props: Props): React.ReactElement {
  const {
    isDisabled,
    testID,
    disabledStyle,
    containerStyle,
    isLoading,
    style,
    textStyle,
    disabledTextStyle,
    indicatorColor,
    text,
    leftElement,
    rightElement,
    activeOpacity,
    onPress,
    touchableOpacityProps,
    isHoverAble,
  } = props;
  const ref = useRef(null);
  const isHovered = useHover(ref);
  if (isDisabled) {
    return (
      <StyledDisabled testID={testID} style={[containerStyle, disabledStyle]}>
        <StyledDisabledText style={[textStyle, disabledTextStyle]}>
          {text}
        </StyledDisabledText>
      </StyledDisabled>
    );
  }
  if (isLoading) {
    return (
      <StyledButton testID={testID} style={[containerStyle, style]}>
        <ActivityIndicator size="small" color={indicatorColor} />
      </StyledButton>
    );
  }
  // if (isHoverAble) {
  //   return (
  //     <StyledButton
  //       ref={ref}
  //       testID={testID}
  //       style={[
  //         containerStyle,
  //         isHovered && { backgroundColor: 'red' },
  //         style,
  //       ]}>
  //       <ActivityIndicator size="small" color={indicatorColor} />
  //     </StyledButton>
  //   );
  // }
  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={containerStyle}
      delayPressIn={30}
      {...touchableOpacityProps}>
      <StyledButton
        ref={ref}
        style={style && isHovered && { backgroundColor: 'red' }}>
        {leftElement || null}
        <StyledText style={textStyle}>{text}</StyledText>
        {rightElement || null}
      </StyledButton>
    </TouchableOpacity>
  );
}

export default Button;
