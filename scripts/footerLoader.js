document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/footer.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(error => {
        console.error("Erro ao carregar o footer:", error);
      });
  });
  