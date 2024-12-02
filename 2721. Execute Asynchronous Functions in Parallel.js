/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  if (
    !Array.isArray(functions) ||
    functions.some((fn) => typeof fn !== "function")
  ) {
    throw new Error("Input must be an array of functions");
  }
  try {
    const res = await Promise.all(functions.map((fn) => fn()));
    return res;
  } catch (error) {
    throw error;
  }
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

