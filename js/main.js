const nav = document.getElementById("navbar");
// const profilePic = document.getElementById('profile-picture');
const navLinks = document.getElementById("nav-links");
const navToggle = document.getElementById("nav-toggle");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    // profilePic.classList.add('small');
  } else {
    nav.classList.remove("scrolled");
    // profilePic.classList.remove('small');
  }
});

function toggleMenu() {
  navLinks.classList.toggle("expanded");
}

document.querySelectorAll(".progress-circle").forEach((circle) => {
  const progress = circle.getAttribute("data-progress");
  circle.style.setProperty("--progress", progress);
  circle.innerHTML = progress + "%";
});
