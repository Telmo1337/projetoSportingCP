document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
  
        // marcar o link atual com aria-current
        const path = window.location.pathname;
        const links = document.querySelectorAll(".nav-link");
  
        links.forEach(link => {
          if (link.getAttribute("href") === path) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
          } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
          }
        });
      });
  });
  