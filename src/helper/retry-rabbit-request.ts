/**
 * @param _promise A promise to resolve
 * @param _maxTries Number of tries before rejecting
 * @param _delayTime Number of milliseconds to wait after rejecting
 * @desc Retries a promise n no. of times before rejecting.
 * @returns resolved promise
 */

const waitMillisecondsFor = (millSeconds: number) =>
  new Promise(resolve => setTimeout(resolve, millSeconds));

export const retryPromiseEventWithDelay = async (
  promise: any,
  maxTries = 2,
  delayTime = 2000,
): Promise<string> => {
  const result = await promise();
  if (result === 'SUCCESS') {
    return result;
  }
  if (result === 'FAIL' && maxTries !== 0) {
    await waitMillisecondsFor(delayTime);
    return retryPromiseEventWithDelay(promise, --maxTries, delayTime);
  }
  return 'FAIL';
};
