
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("hide");
  });

  // 2. Smooth Scroll for nav links
  const scrollLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
        navLinks.classList.add("hide"); // Hide menu on mobile after click
      }
    });
  });

  // 3. Email Form Validation
  const emailInput = document.getElementById("email");
  const subBtn = document.querySelector(".sub-btn");

  subBtn.addEventListener("click", (e) => {
    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    } else {
      alert("Thanks for subscribing! 😊");
    }
  });

  // 4. Scroll-triggered animation (basic)
  const animatedHeaders = document.querySelectorAll(".listings h2");

  function animateOnScroll() {
    animatedHeaders.forEach((header) => {
      const rect = header.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load
});

