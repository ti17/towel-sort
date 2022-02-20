
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
    if (matrix){
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
          matrix[i].reverse();
        }
      }
     return matrix.flat(Infinity);
      } else if (matrix === undefined){
      return [];
    } return [];
    
  }