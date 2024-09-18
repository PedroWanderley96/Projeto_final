document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".collapse.navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
