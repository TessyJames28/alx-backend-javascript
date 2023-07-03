export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) {
    return [];
  }
  return arrayObj.map((student) => student.id);
}
