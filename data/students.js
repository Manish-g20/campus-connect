const students = [
  { name: "Manish Gawali", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "1", skills: "Cybersecurity, Web Development", linkedin: "https://linkedin.com" },
  { name: "Aarav Sharma", course: "BSc–MSc Forensic Science", year: "3", skills: "Forensic Analysis, Research", linkedin: "https://linkedin.com" },
  { name: "Priya Verma", course: "MBA Fraud Management & Investigation", year: "2", skills: "Fraud Detection, Finance", linkedin: "https://linkedin.com" },
  { name: "Rohit Patil", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "2", skills: "Networking, Linux", linkedin: "https://linkedin.com" },
  { name: "Sneha Kulkarni", course: "BSc–MSc Criminology & Forensic Science", year: "1", skills: "Criminology, Case Studies", linkedin: "https://linkedin.com" },
  { name: "Aditya Singh", course: "BBA LLB", year: "4", skills: "Corporate Law, Research", linkedin: "https://linkedin.com" },
  { name: "Neha Joshi", course: "BSc–MSc Forensic Science", year: "2", skills: "Toxicology, Lab Work", linkedin: "https://linkedin.com" },
  { name: "Karan Mehta", course: "MBA Fraud Management & Investigation", year: "1", skills: "Auditing, Risk Analysis", linkedin: "https://linkedin.com" },
  { name: "Isha Kapoor", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "3", skills: "Digital Forensics, Python", linkedin: "https://linkedin.com" },
  { name: "Rahul Deshmukh", course: "BSc–MSc Criminology & Forensic Science", year: "4", skills: "Behavioral Analysis", linkedin: "https://linkedin.com" },

  { name: "Ananya Rao", course: "BSc–MSc Forensic Science", year: "5", skills: "DNA Analysis", linkedin: "https://linkedin.com" },
  { name: "Vikas Malhotra", course: "BBA LLB", year: "2", skills: "Constitutional Law", linkedin: "https://linkedin.com" },
  { name: "Pooja Nair", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "4", skills: "Malware Analysis", linkedin: "https://linkedin.com" },
  { name: "Siddharth Jain", course: "MBA Fraud Management & Investigation", year: "2", skills: "Compliance, AML", linkedin: "https://linkedin.com" },
  { name: "Ritika Sen", course: "BSc–MSc Criminology & Forensic Science", year: "3", skills: "Victimology", linkedin: "https://linkedin.com" },
  { name: "Arjun Yadav", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "5", skills: "SOC, Incident Response", linkedin: "https://linkedin.com" },
  { name: "Nidhi Gupta", course: "BSc–MSc Forensic Science", year: "1", skills: "Fingerprint Analysis", linkedin: "https://linkedin.com" },
  { name: "Harsh Vora", course: "BBA LLB", year: "3", skills: "Legal Drafting", linkedin: "https://linkedin.com" },
  { name: "Kavya Iyer", course: "MBA Fraud Management & Investigation", year: "1", skills: "Corporate Ethics", linkedin: "https://linkedin.com" },
  { name: "Mohit Bansal", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "2", skills: "Web Security", linkedin: "https://linkedin.com" },

  { name: "Tanvi Shah", course: "BSc–MSc Criminology & Forensic Science", year: "5", skills: "Criminal Profiling", linkedin: "https://linkedin.com" },
  { name: "Amit Kulkarni", course: "BSc–MSc Forensic Science", year: "4", skills: "Ballistics", linkedin: "https://linkedin.com" },
  { name: "Rhea Malhotra", course: "BBA LLB", year: "1", skills: "Legal Writing", linkedin: "https://linkedin.com" },
  { name: "Nikhil Pawar", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "3", skills: "Cloud Security", linkedin: "https://linkedin.com" },
  { name: "Simran Kaur", course: "MBA Fraud Management & Investigation", year: "3", skills: "Forensic Accounting", linkedin: "https://linkedin.com" },
  { name: "Yash Thakur", course: "BSc–MSc Criminology & Forensic Science", year: "2", skills: "Crime Mapping", linkedin: "https://linkedin.com" },
  { name: "Mehul Shah", course: "BSc–MSc Forensic Science", year: "3", skills: "Serology", linkedin: "https://linkedin.com" },
  { name: "Ayesha Khan", course: "BBA LLB", year: "5", skills: "Criminal Law", linkedin: "https://linkedin.com" },
  { name: "Rohan Kuldeep", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "4", skills: "Reverse Engineering", linkedin: "https://linkedin.com" },
  { name: "Shivani Mehra", course: "MBA Fraud Management & Investigation", year: "4", skills: "Regulatory Compliance", linkedin: "https://linkedin.com" },

  { name: "Dev Patel", course: "BSc–MSc Forensic Science", year: "2", skills: "Evidence Handling", linkedin: "https://linkedin.com" },
  { name: "Pallavi Desai", course: "BSc–MSc Criminology & Forensic Science", year: "1", skills: "Sociology", linkedin: "https://linkedin.com" },
  { name: "Saurabh Mishra", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "1", skills: "Programming Basics", linkedin: "https://linkedin.com" },
  { name: "Ritu Agarwal", course: "MBA Fraud Management & Investigation", year: "2", skills: "Risk Management", linkedin: "https://linkedin.com" },
  { name: "Kunal Verma", course: "BBA LLB", year: "2", skills: "Legal Research", linkedin: "https://linkedin.com" },
  { name: "Alok Tiwari", course: "BSc–MSc Forensic Science", year: "5", skills: "Expert Testimony", linkedin: "https://linkedin.com" },
  { name: "Shruti Pandey", course: "BSc–MSc Criminology & Forensic Science", year: "4", skills: "Penology", linkedin: "https://linkedin.com" },
  { name: "Varun Choudhary", course: "BTech–MTech Cybersecurity & Digital Forensics", year: "5", skills: "Threat Intelligence", linkedin: "https://linkedin.com" },
  { name: "Ankit Saxena", course: "MBA Fraud Management & Investigation", year: "3", skills: "Internal Audit", linkedin: "https://linkedin.com" }
];

const studentsContainer = document.getElementById("students");
const courseFilter = document.getElementById("courseFilter");
const yearFilter = document.getElementById("yearFilter");

function displayStudents(list) {
  studentsContainer.innerHTML = "";
  list.forEach(s => {
    studentsContainer.innerHTML += `
      <div class="student-card">
        <h3>${s.name}</h3>
        <p><strong>Course:</strong> ${s.course}</p>
        <p><strong>Year:</strong> ${s.year}</p>
        <p><strong>Skills:</strong> ${s.skills}</p>
        <a href="${s.linkedin}" target="_blank">View LinkedIn</a>
      </div>
    `;
  });
}

function filterStudents() {
  const course = courseFilter.value;
  const year = yearFilter.value;

  const filtered = students.filter(s =>
    (course === "" || s.course === course) &&
    (year === "" || s.year === year)
  );

  displayStudents(filtered);
}

courseFilter.addEventListener("change", filterStudents);
yearFilter.addEventListener("change", filterStudents);

// Initial render
displayStudents(students);
