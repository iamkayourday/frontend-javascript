// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "Abdulbasit",
    lastName: "Imam",
    age: 99,
    location: "Nigeria",
  };
  
  const student2: Student = {
    firstName: "Hamdah",
    lastName: "Imam",
    age: 25,
    location: "New Jersey",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table
  const body = document.querySelector("body");
  
  // Create a table element
  const table = document.createElement("table");
  const tableHeader = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  
  // Add column headers
  th1.textContent = "First Name";
  th2.textContent = "Location";
  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);
  
  // Add student rows to the table
  const tableBody = document.createElement("tbody");
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  
  // Append the table to the body
  if (body) {
    body.appendChild(table);
  }
  