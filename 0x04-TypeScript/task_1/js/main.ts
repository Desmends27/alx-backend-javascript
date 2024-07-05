interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: true | false,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}
interface Directors extends Teacher {
    numberOfReports: number
}
interface printTeacher {
    (firstName: Teacher["firstName"], lastName: Teacher["lastName"]): string;
}
class StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}
let printTeacher: printTeacher = function (firstName, lastName) {
    return `${firstName[0]} ${lastName}`
}
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

