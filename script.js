document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});






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


//seccao de noticias
const noticias = [
  {
    image: "/assets/news1.jpg",
    category: "Equipa Principal",
    date: "12/05/2023",
    title: "Vitória importante no último jogo da temporada.",
    text: "Sporting FC conquista uma vitória crucial na última partida da temporada, garantindo uma vaga na próxima Liga dos Campeões.",
    link: "#"
  },
  {
    image: "/assets/news2.jpg",
    category: "Equipa Principal",
    date: "10/05/2023",
    title: "Gyökeres renova contrato com o Sporting",
    text: "O avançado sueco prolonga o seu vínculo com os leões por mais três anos, mantendo-se no clube até 2028.",
    link: "#"
  },
  {
    image: "/assets/news3.jpg",
    category: "Clube",
    date: "08/05/2023",
    title: "Cristiano Ronaldo regressa ao Sporting!",
    text: "Aos 40 anos, CR7 volta a Alvalade para cumprir o sonho de terminar a carreira no clube que o formou.",
    link: "#"
  }
];

const noticiasContainer = document.getElementById("noticiasContainer");

noticias.map(n => {
  const card = `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
        <img src="${n.image}" class="card-img-top" alt="${n.title}" style="height: 240px; object-fit: cover;">
        <div class="card-body">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-sporting">${n.category}</span>
            <small class="text-muted">${n.date}</small>
          </div>
          <h5 class="card-title">${n.title}</h5>
          <p class="card-text">${n.text}</p>
          <a href="${n.link}" class="text-sporting fw-medium">Ler mais →</a>
        </div>
      </div>
    </div>
  `;

  noticiasContainer.innerHTML += card;
});


