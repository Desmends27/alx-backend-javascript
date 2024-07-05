/// <reference path="./Subject.ts" />

class Java extends Subjects.Subject {

    getRequirements(){
        return "Here is the list of requirements for Java"
    }
    getAvailableTeacher(){
        if (this.teacher.experienceTeachingJava !== undefined)
            {
                return 'No available teacher'
            }
        return `Available Teacher: ${this.teacher.firstName}`
    }

}
export {Java}