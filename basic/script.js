let students = [
  { name: "Ram", marks: 80 },
  { name: "Shyam", marks: 35 },
  { name: "Mohan", marks: 60 },
  { name: "Sita", marks: 25 }
];

function showResult() {

  let result = students
    .filter(s => s.marks >= 40)
    .map(s => ({
      name: s.name,
      marks: s.marks + 5
    }));

  let outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "";

  result.forEach(s => {
    outputDiv.innerHTML += `<p>${s.name} : ${s.marks}</p>`;
  });
}
