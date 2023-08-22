/* class studentsController */
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((resp) => {
      response.statusCode = 200;
      const title = 'This is the list of our students\n';
      const cs = `Number of students in CS: ${resp.CS.length}. List: ${resp.CS.join(', ')}\n`;
      const swe = `Number of students in SWE: ${resp.SWE.length}. List: ${resp.SWE.join(', ')}`;
      const msg = title + cs + swe;
      response.end(msg);
    }).catch(() => {
      response.statusCode = 500;
      response.end('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    if (request.params.major === 'CS') {
      readDatabase(process.argv[2]).then((resp) => {
        response.statusCode = 200;
        response.end(`List: ${resp.CS.join(', ')}`);
      }).catch(() => {
        response.statusCode = 500;
        response.end('Cannot load the database');
      });
    } else if (request.params.major === 'SWE') {
      readDatabase(process.argv[2]).then((resp) => {
        response.statusCode = 200;
        response.end(`List: ${resp.SWE.join(', ')}`);
      }).catch(() => {
        response.statusCode = 500;
        response.end('Cannot load the database');
      });
    } else {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
