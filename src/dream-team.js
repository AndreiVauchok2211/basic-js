const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let res;
  if (Array.isArray(members)) {
    members.forEach((e) => {
      if (typeof e == "string") {
        arr.push(e.trim()[0].toUpperCase());
        res = arr.sort().join("");
      }
    });
  } else {
    return false;
  }

  return res;
}

module.exports = {
  createDreamTeam,
};
