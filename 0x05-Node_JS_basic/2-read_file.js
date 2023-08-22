/* Reading a file synchronously with Node JS */
const fs = require('fs');

module.exports = function countStudents(database) {
  const swe = [];
  const cs = [];

  try {
    const file = fs.readFileSync(database, 'utf-8');
    const lines = file.trim().split('\n');
    const students = lines.length - 1;

    for (const studentLine of lines.slice(1)) {
      const student = studentLine.split(',').map((item) => item.trim());
      const field = student[3].trim();
      if (field === 'CS') {
        cs.push(student[0]);
      } else if (field === 'SWE') {
        swe.push(student[0]);
      }
    }
    console.log(`Number of students: ${students}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
