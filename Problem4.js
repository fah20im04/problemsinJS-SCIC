function maxInArray(arr) {
  //   return Math.max(...arr);
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxInArray([5, 1, 9, 3]));
