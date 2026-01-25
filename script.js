// STUDENTS
function filterStudents() {
  const filter = document.getElementById("courseFilter").value;
  const container = document.getElementById("students");
  container.innerHTML = "";

  students
    .filter(s => filter === "All" || s.course === filter)
    .forEach(s => {
      container.innerHTML += `
        <div class="card">
          <h3>${s.name}</h3>
          <p>${s.course} | Year ${s.year}</p>
          <p>Skills: ${s.skills}</p>
          <a href="${s.linkedin}" target="_blank">LinkedIn</a>
        </div>
      `;
    });
}

// EVENTS
if (typeof events !== "undefined") {
  const el = document.getElementById("events");
  events.forEach(e => {
    el.innerHTML += `
      <div class="card">
        <h3>${e.title}</h3>
        <p>${e.date}</p>
      </div>
    `;
  });
}

// ANNOUNCEMENTS
if (typeof announcements !== "undefined") {
  const el = document.getElementById("announcements");
  announcements.forEach(a => {
    el.innerHTML += `
      <div class="card">
        <h3>${a.club}</h3>
        <p>${a.message}</p>
      </div>
    `;
  });
}

// PYQS
if (typeof pyqs !== "undefined") {
  const el = document.getElementById("pyqs");
  pyqs.forEach(p => {
    el.innerHTML += `
      <div class="card">
        <h3>${p.course} - ${p.year}</h3>
        <p>${p.description}</p>
      </div>
    `;
  });
}
