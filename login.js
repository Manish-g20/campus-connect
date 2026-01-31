document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple mock check
  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect to main app
    window.location.href = "index.html";
  } else {
    alert("Please enter valid details");
  }
});

