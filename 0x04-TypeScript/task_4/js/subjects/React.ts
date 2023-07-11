import { Teacher } from './Teacher';

namespace Subject {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export default class React {
    teacher: Teacher;
    experienceTeachingReact?: number;

    constructor(
      teacher: Teacher,
      experienceTeachingReact?: number,
    ) {
      this.teacher = teacher;
      this.experienceTeachingReact = experienceTeachingReact;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

   getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact === undefined) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
}
