/// <reference path="./Subject.ts" />
class React extends Subjects.Subject {

    getRequirements(){
        return "Here is the list of requirements for React"
    }
    getAvailableTeacher(){
        if (this.teacher.experienceTeachingReact !== undefined)
            {
                return 'No available teacher'
            }
        return `Available Teacher: ${this.teacher.firstName}`
    }

}
export {React}