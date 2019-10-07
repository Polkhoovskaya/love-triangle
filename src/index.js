/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  preferences.forEach((element, index) => {
    let first = index + 1;
    let second = preferences[index] - 1;
    let third =  preferences[second] - 1;

    if (preferences[third] === first) {
      result++;
    }
  })
  return Math.floor(result/3);
};
