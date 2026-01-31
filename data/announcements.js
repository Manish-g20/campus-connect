const announcements = [
  {
    title: "Cybersecurity Workshop on Digital Forensics",
    category: "Workshops",
    postedBy: "Cyber Security Club",
    date: "2026-02-05",
    description: "Hands-on workshop covering mobile forensics and incident response."
  },
  {
    title: "Mid-Sem Examination Schedule Released",
    category: "Examinations",
    postedBy: "Academic Office",
    date: "2026-02-01",
    description: "Mid-sem exams will begin from 10th February. Check portal for timetable."
  },
  {
    title: "Call for Volunteers – Annual Tech Fest",
    category: "Clubs & Societies",
    postedBy: "Cultural Committee",
    date: "2026-02-08",
    description: "Students interested in volunteering can register by 6th February."
  },
  {
    title: "Submission Deadline for Forensic Science Assignment",
    category: "Academic",
    postedBy: "Forensic Science Department",
    date: "2026-02-03",
    description: "Final submission deadline for Semester 2 assignments."
  },
  {
    title: "Placement Drive – Cybersecurity Analyst Role",
    category: "Placements",
    postedBy: "Placement Cell",
    date: "2026-02-12",
    description: "Eligible students from cybersecurity programs can apply."
  }
];

const container = document.getElementById("announcements");
const categoryFilter = document.getElementById("categoryFilter");

function displayAnnouncements(list) {
  container.innerHTML = "";

  list.forEach(a => {
    container.innerHTML += `
      <div class="announcement-card">
        <h3>${a.title}</h3>
        <p class="meta">
          <strong>${a.category}</strong> • ${a.postedBy} • ${new Date(a.date).toDateString()}
        </p>
        <p>${a.description}</p>
      </div>
    `;
  });
}

function filterAnnouncements() {
  const category = categoryFilter.value;
  const filtered = announcements.filter(a =>
    category === "" || a.category === category
  );
  displayAnnouncements(filtered);
}

categoryFilter.addEventListener("change", filterAnnouncements);

// Initial load
displayAnnouncements(announcements);
