namespace Subjects {
  export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }
    set setTeacher(teacher: Teacher) {
      return this.teacher = teacher;
    }
  }
}
