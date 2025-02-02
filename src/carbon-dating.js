const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const TWO_LOG = Number(Math.log(2).toFixed(3));

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    Number(sampleActivity) &&
    typeof sampleActivity === "string" &&
    sampleActivity >= 1 &&
    sampleActivity <= MODERN_ACTIVITY
  ) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity) / (TWO_LOG / HALF_LIFE_PERIOD)
    );
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
