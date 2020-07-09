import { MutableRefObject } from 'react';
import actionHook from '../lib/actionHook';

export const useHover = actionHook({
  events: ['mouseenter', 'mouseleave'],
}) as <T>(ref: MutableRefObject<T>) => boolean;
