interface DirectorInterface {
workFromHome(): string;
getCoffeeBreak(): string;
workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from Home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from Home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: any): boolean {
  if (employee instanceof Director) {
   return true
  }
  return false
}

function executeWork(employee: any): void {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks())
  } else {
    console.log(employee.workTeacherTasks())
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";


function teachClass(todayClass: Subjects): void {
 if (todayClass === "Math") {
   console.log('Teaching Math');
 } else {
   console.log('Teaching History');
 }
}

teachClass('Math');
teachClass('History');
