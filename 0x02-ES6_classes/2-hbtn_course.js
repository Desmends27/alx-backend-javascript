export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this.length = length;
  }

  get length() {
    return this._length;
  }

  set student(student) {
    if (!(student instanceof Array)) {
      throw TypeError('Student must be an array');
    }
    student.forEach((std) => {
      if (typeof std !== 'string') {
        throw TypeError('student must contain strings only');
      }
    });
    this._student = student;
  }

  get student() {
    return this._student;
  }
}
