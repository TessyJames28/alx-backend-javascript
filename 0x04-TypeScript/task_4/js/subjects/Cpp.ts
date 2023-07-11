import { Teacher } from './Teacher';
import { Subjects } from './Subject';

interface Teacher {
  experienceTeachingC?: number;
}

export class Cpp extends Subjects.Subject {
  experienceTeachingC?: number;

  constructor(
    teacher: Teacher;
    experienceTeachingC?: number,
  ) {
    super(teacher);
    this.experienceTeachingC = experienceTeachingC;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for Cpp';
  }

   getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC === undefined) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
}
