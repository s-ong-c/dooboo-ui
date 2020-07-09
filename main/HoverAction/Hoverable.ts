import React, { ReactElement } from 'react';

import isHoverEnabled from './HoverState';

interface Props {
  children: any;
}
function Hoverable(props: Props): ReactElement {
  const { children } = props;
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [showHover, setShowHover] = React.useState<boolean>(true);

  const _handleMouseEnter = (e: any) => {
    if (isHoverEnabled() && !isHovered) {
      setIsHovered(true);
    }
  };
  const _handleMouseLeave = (e: any) => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  const _handleGrant = () => {
    setShowHover(false);
  };

  const _handleRelease = () => {
    setShowHover(true);
  };

  const child =
    typeof children === 'function'
      ? children(showHover && isHovered)
      : children;

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: _handleMouseEnter,
    onMouseLeave: _handleMouseLeave,

    // prevent hover showing while responder
    // onResponderGrant: _handleGrant,
    // onResponderRelease: _handleRelease,
    // if child is Touchable
    // onPressIn: _handleGrant,
    // onPressOut: _handleRelease,
  });
}
export default Hoverable;
Hoverable.displayName = 'Hoverable';
