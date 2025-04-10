document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".transition-link");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // prevent immediate navigation

      const target = this.href;

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 500); // matches the transition time in CSS
    });
});
});



/*
//seccoes de trofeus
const taças = [
    { 
      number: 19, 
      title: "Campeonatos Nacionais" 
    },
    { 
      number: 17, 
      title: "Taças de Portugal" 
    },
    { 
      number: 9, 
      title: "Supertaças" 
    }
    // podes adicionar mais aqui se quiseres 
];

const trofeusContainer = document.getElementById("trofeusContainer");

taças.map(t => {
    const card = `
        <div class="col-md-4">
          <div class="card trophy-card text-center h-100">
            <div class="card-body p-4">
              <i class="bi bi-trophy-fill text-warning display-4 mb-3"></i>
              <h3 class="fw-bold">${t.number}</h3>
              <p class="text-muted">${t.title}</p>
            </div>
          </div>
        </div>
    `;
    trofeusContainer.innerHTML += card;
});
*/


//function => fetch noticias
function fetchNoticias() {

noticiasApiURL = 'http://localhost:3000/noticias';

fetch(noticiasApiURL)
  .then((res) => res.json())
  .then((data) => {

    console.log('test: ', data);

    const noticiasContainer = document.getElementById("noticiasContainer");

    data.slice(0, 3).forEach((n) => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
    
      col.innerHTML = `
        <div class="card h-100">
          <img src="${n.imgURL}" class="card-img-top" alt="${n.titulo}" style="height: 240px; object-fit: cover;">
          <div class="card-body">
            <div class="d-flex align-items-center gap-2 mb-2">
              <span class="badge bg-sporting">${n.categoria}</span>
              <small class="text-muted">${n.data}</small>
            </div>
            <h5 class="card-title">${n.titulo}</h5>
            <p class="card-text">${n.content}</p>
            <a href="${n.link}" class="text-sporting fw-medium">Ler mais →</a>
          </div>
        </div>
      `;
      noticiasContainer.appendChild(col);
    })
      //evento erro
    .catch((err) => {
      console.error(err);
    })
  })
}
document.addEventListener('DOMContentLoaded', fetchNoticias);