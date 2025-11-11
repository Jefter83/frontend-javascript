// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Ama",
  lastName: "Mensah",
  age: 22,
  location: "Accra"
};

const student2: Student = {
  firstName: "Kwame",
  lastName: "Boateng",
  age: 24,
  location: "Kumasi"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

// Add table headers
const headerRow = document.createElement("tr");
["First Name", "Location"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Populate table rows with student data
studentsList.forEach(student => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);

