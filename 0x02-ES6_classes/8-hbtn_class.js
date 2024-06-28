export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this.location = location;
  }

  toString() {
    return this._size;
  }

  toValue() {
    return this.location;
  }
}
