const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (let r = 0; r < matrix.length; r++) {
    res.push([]);
    for (let c = 0; c < matrix[r].length; c++) {
      res[r][c] = 0;
    }
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      let count = 0;
      // console.log(matrix[r][c]);
      if (
        r < matrix.length - 1 &&
        c < matrix[r].length - 1 &&
        matrix[r + 1][c + 1] === true
      ) {
        count += 1;
      }
      if (c < matrix[r].length - 1 && matrix[r][c + 1] === true) {
        count += 1;
      }
      if (r < matrix.length - 1 && matrix[r + 1][c] === true) {
        count += 1;
      }
      if (r > 0 && c > 0 && matrix[r - 1][c - 1] === true) {
        count += 1;
      }
      if (r > 0 && matrix[r - 1][c] === true) {
        count += 1;
      }
      if (c > 0 && matrix[r][c - 1] === true) {
        count += 1;
      }
      if (r > 0 && c < matrix[r].length - 1 && matrix[r - 1][c + 1] === true) {
        count += 1;
      }
      if (r < matrix.length - 1 && c > 0 && matrix[r + 1][c - 1] === true) {
        count += 1;
      }
      res[r][c] = count;
      count = 0;
    }
  }
  return res;
}

module.exports = {
  minesweeper,
};
