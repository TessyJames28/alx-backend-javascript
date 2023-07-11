import { Teacher } from './Teacher';

namespace Subject {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export default class React {
    teacher: Teacher;
    experienceTeachingJava?: number;

    constructor(
      teacher: Teacher,
      experienceTeachingJava?: number,
    ) {
      this.teacher = teacher;
      this.experienceTeachingJava = experienceTeachingJava;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

   getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava === undefined) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
}
