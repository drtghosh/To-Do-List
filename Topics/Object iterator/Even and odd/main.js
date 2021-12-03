function sumTheArrays(naturalNumbers) {
  let evenArray = Object.values(naturalNumbers)[0];
  let oddArray = Object.values(naturalNumbers)[1];
  let result = new Array(evenArray.length);
  let i;
  for (i = 0; i < evenArray.length; i++) {
    result[i] = evenArray[i] + oddArray[i];
  }
  return result;
}