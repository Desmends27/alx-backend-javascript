import ClassRoom from './0-classroom';

function initializeRooms() {
  const arr = [19, 20, 34];
  return arr.map((item) => new ClassRoom(item));
}
export default initializeRooms;
