
exports.min = function min (array) {
  if (array.length < 1) {
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max (array) {
  if (array.length < 1) {
    return 0;
  } else {
    return Math.max(...array);
  }
}

exports.avg = function avg (array) {
  if (array.length < 1) {
    return 0;
  } else {
    return (array.reduce ((sum, elem) => sum + elem, 0)) / array.length;
  }
