import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

let isEnabled = false;
const HOVER_THRESHOLD_MS = 1000;
let lastTouchTimestamp = 0;

function enableHover(): void {
  console.log('enableHover');
  if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
    return;
  }
  isEnabled = true;
}

function disableHover() {
  console.log('disableHover');
  lastTouchTimestamp = Date.now();
  if (isEnabled) {
    isEnabled = false;
  }
}
if (canUseDOM) {
  /**
   * Web browsers emulate mouse events (and hover states) after touch events.
   * This code infers when the currently-in-use modality supports hover
   * (including for multi-modality devices) and considers "hover" to be enabled
   * if a mouse movement occurs more than 1 second after the last touch event.
   * This threshold is long enough to account for longer delays between the
   * browser firing touch and mouse events on low-powered devices.
   */

  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('touchmove', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);
}

export default () => isEnabled;
