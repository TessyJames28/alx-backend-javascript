export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.values(allEmployees).flatMap((employees) => employees);
  let currentIndex = 0;

  return {
    next() {
      if (currentIndex >= departments.length) {
        return { done: true };
      }

      const employee = departments[currentIndex];
      currentIndex += 1;

      return { value: employee, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
