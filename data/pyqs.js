const pyqs = [];

// Helper to auto-generate lots of data
const courses = [
  "BTech–MTech Cybersecurity & Digital Forensics",
  "BSc–MSc Forensic Science",
  "BSc–MSc Criminology & Forensic Science",
  "MBA Fraud Management & Investigation",
  "BBA LLB"
];

const subjectsByCourse = {
  "BTech–MTech Cybersecurity & Digital Forensics": [
    "Computer Networks",
    "Digital Forensics",
    "Cyber Laws",
    "Cryptography",
    "Web Security"
  ],
  "BSc–MSc Forensic Science": [
    "Forensic Biology",
    "Forensic Chemistry",
    "Toxicology",
    "DNA Analysis"
  ],
  "BSc–MSc Criminology & Forensic Science": [
    "Criminology",
    "Victimology",
    "Penology",
    "Criminal Profiling"
  ],
  "MBA Fraud Management & Investigation": [
    "Forensic Accounting",
    "AML & Compliance",
    "Corporate Fraud",
    "Risk Management"
  ],
  "BBA LLB": [
    "Criminal Law",
    "Cyber Law",
    "Constitutional Law",
    "Corporate Law"
  ]
};

// Generate 100+ PYQs automatically
courses.forEach(course => {
  subjectsByCourse[course].forEach(subject => {
    for (let year = 2019; year <= 2024; year++) {
      pyqs.push({
        course,
        subject,
        year: year.toString(),
        title: `${subject} Question Paper`,
        file: "#"
      });
    }
  });
});

const pyqContainer = document.getElementById("pyqs");
const courseFilter = document.getElementById("courseFilter");
const yearFilter = document.getElementById("yearFilter");
const subjectFilter = document.getElementById("subjectFilter");

function populateSubjects() {
  subjectFilter.innerHTML = `<option value="">All Subjects</option>`;
  const selectedCourse = courseFilter.value;

  if (selectedCourse && subjectsByCourse[selectedCourse]) {
    subjectsByCourse[selectedCourse].forEach(sub =>
      subjectFilter.innerHTML += `<option>${sub}</option>`
    );
  }
}

function displayPYQs(list) {
  pyqContainer.innerHTML = "";

  list.forEach(p => {
    pyqContainer.innerHTML += `
      <div class="pyq-card">
        <h3>${p.subject}</h3>
        <p><strong>Course:</strong> ${p.course}</p>
        <p><strong>Year:</strong> ${p.year}</p>
        <a href="${p.file}" target="_blank">View / Download</a>
      </div>
    `;
  });
}

function filterPYQs() {
  const course = courseFilter.value;
  const year = yearFilter.value;
  const subject = subjectFilter.value;

  const filtered = pyqs.filter(p =>
    (course === "" || p.course === course) &&
    (year === "" || p.year === year) &&
    (subject === "" || p.subject === subject)
  );

  displayPYQs(filtered);
}

courseFilter.addEventListener("change", () => {
  populateSubjects();
  filterPYQs();
});
yearFilter.addEventListener("change", filterPYQs);
subjectFilter.addEventListener("change", filterPYQs);

// Initial load
displayPYQs(pyqs);
