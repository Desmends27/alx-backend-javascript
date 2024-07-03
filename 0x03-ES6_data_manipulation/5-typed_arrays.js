export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const view = new DataView(arr);

  try {
    view.setInt8(position, value);
  } catch (error) {
    throw new RangeError('Position outside range');
  }
  return arr;
}
