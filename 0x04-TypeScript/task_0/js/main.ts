interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "James",
  lastName: "Nick",
  age: 25,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

// Get the table body element
const tableBody = document.querySelector("tbody");

// Loop through the students array and create a new row for each student
studentsList.forEach((student) => {
  // Create a new row
  const row = document.createElement("tr");

  // Create cells for first name and location
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
