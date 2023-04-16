const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = "+";
  } else {
    options.separator = "" + options.separator;
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  } else {
    options.additionSeparator = "" + options.additionSeparator;
  }

  if (options.addition === undefined) {
    options.addition = "";
  } else {
    options.addition = "" + options.addition;
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  let rep = (options.addition + options.additionSeparator).repeat(
    options.additionRepeatTimes
  );
  rep = rep.slice(0, rep.length - options.additionSeparator.length);

  let result = (str + rep + options.separator).repeat(options.repeatTimes);
  result = result.slice(0, result.length - options.separator.length);
  return result;
}

module.exports = {
  repeater,
};
