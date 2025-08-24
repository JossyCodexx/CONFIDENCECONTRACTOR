

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    alert(`Thank you ${name}, your message has been sent!\n\nDetails:\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    
    this.reset();
  });














  
  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show-dropdown");
  }

  // Optional: Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.querySelector(".hamburger-icon");

    if (!icon.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("show-dropdown");
    }
  });

