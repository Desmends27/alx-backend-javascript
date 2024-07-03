export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  }
  return [];
}
