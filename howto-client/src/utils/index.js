
export const createArray = length => Array.from(Array(length).keys());

export const escape={
  '&':`&#38;`
}


export function makeAsyncActions(actionName) {
  const prefix = actionName;
  return {
    INDEX : prefix,
    REQUEST : prefix + '_REQUEST',
    PENDING : prefix + '_PENDING',
    SUCCESS : prefix + '_SUCCESS',
    FAILURE : prefix + '_FAILURE',
  }
}