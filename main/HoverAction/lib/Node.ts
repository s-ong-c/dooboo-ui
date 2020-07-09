import { findDOMNode } from 'react-dom';
import getNativeNode from './Node.native';

function getNode(ref: any) {
  try {
    let node = getNativeNode(ref);
    if (node) node = findDOMNode(node);
    return node;
  } catch (error) {
    // console.error(`Couldn't find node`, error, { ref });
    return null;
  }
}

export default getNode;
