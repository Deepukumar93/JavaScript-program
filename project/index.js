const students = [
  { name: "Alice", marks: [85, 92, 78] },
  { name: "Bob", marks: [45, 38, 50] },
  { name: "Charlie", marks: [90, 88, 94] }
];
function calculateAverageMarks(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}
function getPassedStudents(students) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(students)) {
      reject("Input must be an array.");
    }

    const passed = students
      .map(student => {
        const avg = calculateAverageMarks(student.marks);
        return { ...student, average: avg };
      })
      .filter(student => student.average >= 50);

    if (passed.length > 0) {
      resolve(passed);
    } else {
      reject("Fail");
    }
  });
}
async function processStudents(data) {
  try {
    const passedStudents = await getPassedStudents(data);

    // Step 5: Add new property using spread operator
    const updatedStudents = passedStudents.map(student => {
      return { ...student, status: "Pass" };
    });

    // Step 6: Display summary using forEach()
    updatedStudents.forEach(student => {
      console.log("Student:", student.name);
      console.log("Average:", student.average);
      console.log("Status:", student.status);
      console.log("------");
    });

  } catch (error) {
    console.error("Error:", error);
  }
}
processStudents(students);

