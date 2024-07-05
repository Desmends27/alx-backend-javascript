/// <reference path="./Subject.ts" />

class Cpp extends Subjects.Subject {

    getRequirements(){
        return "Here is the list of requirements for Cpp"
    }
    getAvailableTeacher(){
        if (this.teacher.experienceTeachingC !== undefined)
            {
                return 'No available teacher'
            }
        return `Available Teacher: ${this.teacher.firstName}`
    }

}
export { Cpp };