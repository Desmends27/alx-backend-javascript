/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
export const cpp = new Cpp(cTeacher);
export const java = new Java(cTeacher);
export const react = new React(cTeacher);

cpp.getRequirements()
cpp.getAvailableTeacher()
java.getRequirements()
java.getAvailableTeacher()
react.getRequirements()
react.getAvailableTeacher()