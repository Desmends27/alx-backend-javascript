export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr) && typeof city === 'string') {
    return arr.filter((obj) => obj.location === city);
  }
  return [];
}
