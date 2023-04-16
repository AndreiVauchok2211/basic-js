const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const result = [];
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  let arrFrom = [...arr];

  console.log(arrFrom);

  arrFrom.forEach((el, index) => {
    switch (el) {
      case "--discard-next":
        arrFrom[index + 1] ? arrFrom.splice(index, 2, null) : "";
        break;
      case "--discard-prev":
        arrFrom[index - 1] ? result.pop() : "";
        break;
      case "--double-next":
        arrFrom[index + 1] ? result.push(arrFrom[index + 1]) : "";
        break;
      case "--double-prev":
        arrFrom[index - 1] ? result.push(arrFrom[index - 1]) : "";
        break;
      default:
        result.push(el);
    }
  });
  console.log(result);
  return result;
}

module.exports = {
  transform,
};
