export default function updateUniqueItems(map) {
  for (const [key, value] of map) {
    if (value === 1) {
      try {
        map.set(key, 100);
      } catch (error) {
        return new Error('Cannot process');
      }
    }
  }
}
