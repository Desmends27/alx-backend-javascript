export default function appendToEachArrayValue(array, appendString) {
  let counter = 0;
  const newArr = [];
  for (const idx of array) {
    newArr[counter] = appendString + idx;
    counter += 1;
  }

  return newArr;
}
