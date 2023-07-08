export interface Teacher {
  readonly firstName: string; //can only be modified once at initialisation
  readonly lastName: string; //can only be modified once at initialisation
  fullTimeEmployee: boolean; //should always be defined
  location: string; //should always be defined
  yearsOfExperience?: number; //the attribute is optional
  [propName: string]: any; //allows any kind of attribute to the object
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher { //extends the Teacher interface
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
