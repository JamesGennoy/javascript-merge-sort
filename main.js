var mergeSort = function(list) {
  if (list.length <= 1) {
    return list;
  }

  var left = [];
  var right = [];

  var middle = list.length / 2;

  for (var x = 0; x < list.length; x++) {
    if (x < middle) {
      left.push(list[x]);
    }
    else {
      right.push(list[x]);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};

var merge = function(left, right) {
  var sorted = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  }

  while (left.length > 0) {
    sorted.push(left.shift());
  }

  while (right.length > 0) {
    sorted.push(right.shift());
  }

  return sorted;
};

console.time('mergeSort');
console.log(mergeSort([1,7,3,10,5,9,2,4,6,8]));
console.timeEnd('mergeSort');
