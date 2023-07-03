export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentCity = students.filter((student) => student.location === city);
  const studentGrades = studentCity.map((student) => {
    const gradeMatch = newGrades.find((stuGrade) => stuGrade.studentId === student.id);
    if (gradeMatch) {
      return { ...student, grade: gradeMatch.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return studentGrades;
}
