export default function cleanSet(set, startString) {
  const str = [];
  if (startString !== '') {
    for (const item of set) {
      if (item.startsWith(startString)) {
        str.push(item.substring(startString.length));
      }
    }
  }
  return str.join('-');
}
