interface DirectorInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}
interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,

}
class Director{
    workFromHome(){
        return 'Working from home'
    }
    getCoffeeBreak(){
        return 'Getting a coffee break'
    }
    workDirectorTasks(){
        return 'Getting to director tasks'
    }
}
class Teacher{
    workFromHome(){
        return 'Cannot work from home'
    }
    getCoffeeBreak(){
        return 'Cannot have a break'
    }
    workTeacherTasks(){
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string ){
    if (typeof salary === 'string')
        {
            salary = Number(salary)
        }
    if (salary < 500)
        {
            const teacher: TeacherInterface = new Teacher()
            return teacher
        }
    else {
        const director: DirectorInterface = new Director()
        return director
    }
}
function isDirector(employee: any){
    return employee instanceof Director
}
function executeWork(employee: any){
    if (employee instanceof Director){
        employee.workDirectorTasks;
    }
    else{
        employee.workTeacherTasks
    }
}
type Subjects = "Math" | "History"
function teachClass(todayClass: Subjects){
    if (todayClass === 'Math'){
        return "Teaching Math"
    }
    return "Teaching History"
}