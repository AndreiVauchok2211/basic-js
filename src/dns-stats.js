const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  for (let padS of domains) {
    let res = padS.split(".").reverse();

    for (let i = 0; i < res.length; i++) {
      let arr = "." + res.slice(0, i + 1).join(".");
      obj[arr] = obj[arr] ? obj[arr] + 1 : 1;
    }
    console.log(obj);
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
