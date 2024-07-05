interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}
let student1: Student = {
    firstName: "James",
    lastName: "Bond",
    age: 50,
    location: "MI6"
};
let student2: Student = {
    firstName: "John",
    lastName: "English",
    age: 30,
    location: "MI7"
};

let studentList: Student[] = [student1, student2];

let table = document.createElement('table') as HTMLTableElement;
studentList.forEach((student) => {
    let row = document.createElement('tr') as HTMLTableRowElement;
    let firstName = document.createElement('td') as HTMLTableCellElement;
    let location = document.createElement('td') as HTMLTableCellElement;
    firstName.innerText = student.firstName;
    location.innerText = student.location;
    row.append(firstName);
    row.append(location);
    table.appendChild(row);
})
const body = document.getElementsByTagName('body')[0];
body.appendChild(table);