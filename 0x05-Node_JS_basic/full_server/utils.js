/* Reading a file synchronously with Node JS */
import fs from 'fs';

export default function readDatabase(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf-8', (error, file) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }

      const swe = [];
      const cs = [];
      const lines = file.trim().split('\n');

      for (const studentLine of lines.slice(1)) {
        const student = studentLine.split(',').map((item) => item.trim());
        const field = student[3].trim();
        if (field === 'CS') {
          cs.push(student[0]);
        } else if (field === 'SWE') {
          swe.push(student[0]);
        }
      }

      const result = {
        CS: cs,
        SWE: swe,
      };
      resolve(result);
    });
  });
}
