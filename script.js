//function => fetch noticias
function fetchNoticias() {
  const noticiasApiURL = 'http://localhost:3000/noticias';

  fetch(noticiasApiURL)
    .then((res) => res.json())
    .then((data) => {
      const noticiasContainer = document.getElementById("noticiasContainer");

      const carouselId = "noticiasCarousel";
      const carousel = document.createElement("div");
      carousel.id = carouselId;
      carousel.className = "carousel slide";
      carousel.setAttribute("data-bs-ride", "carousel");

      const indicators = document.createElement("div");
      indicators.className = "carousel-indicators";

      const inner = document.createElement("div");
      inner.className = "carousel-inner";

      // agrupar noticias de 3 em 3
      const chunkSize = 3;
      for (let i = 0; i < data.length; i += chunkSize) {
        const grupo = data.slice(i, i + chunkSize);

        // indicadores
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", `#${carouselId}`);
        button.setAttribute("data-bs-slide-to", i / chunkSize);
        if (i === 0) button.classList.add("active");
        indicators.appendChild(button);

        //slide item
        const item = document.createElement("div");
        item.className = `carousel-item${i === 0 ? " active" : ""}`;

        const row = document.createElement("div");
        row.className = "row justify-content-center g-4";

        grupo.forEach(n => {
          const col = document.createElement("div");
          col.className = "col-md-6 col-lg-4";

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
          row.appendChild(col);
        });

        item.appendChild(row);
        inner.appendChild(item);
      }

      const prevBtn = `
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>`;

      const nextBtn = `
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Seguinte</span>
        </button>`;

      carousel.appendChild(indicators);
      carousel.appendChild(inner);
      carousel.innerHTML += prevBtn + nextBtn;

      noticiasContainer.appendChild(carousel);
    })
    .catch(err => console.error(err));
}




//function => fetch jogadores
function fetchJogadores() {
  apiURL = 'http://localhost:3000/jogadores';

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {

      console.log('teste: ', data);
      
      const jogadoresContainer = document.getElementById("jogadoresContainer");


      //random para apenas apresentar os 6 jogadores
      const jogadoresAleatorios = data.sort(() => 0.5 - Math.random()).slice(0, 6);

      jogadoresAleatorios.slice(0, 6).forEach((j) => {

        const col = document.createElement('div');

        col.className = "col-6 col-sm-4 col-md-3 col-lg-2 text-center";

        col.innerHTML = `
              <div class="mx-auto mb-2" style="width: 120px; height: 120px;">
                <a href="/pages/jogador.html?id=${j.id}">
                  <img src="${j.imagem}" 
                    class="img-fluid rounded-circle w-100 h-100" 
                    style="object-fit: cover; object-position: top;">
                </a>
              </div>
              <h5 class="mb-0">${j.nome}</h5>
              <p class="small text-muted">${j.posição}</p>
            `;


        jogadoresContainer.appendChild(col);
      });
    })
    .catch(err => console.error( err));
}


//fetch trofeus
//fetch trofeus da api

function fetchTrofeus() {

  trofeusApiURL = 'http://localhost:3000/trofeus';

  fetch(trofeusApiURL)
      .then((res) => res.json())
      .then((data) => {
          console.log('teste: ', data);

          const trofeusContainer = document.getElementById("trofeusContainer");
          
          data.forEach((t) => {

            const col = document.createElement('div');
            col.className = 'col-6 col-md-4 col-lg-4 text-center mb-4';
        
            col.innerHTML = `
                <div class="trofeu-img-container mx-auto mb-2">
                    <img src="${t.imgTrofeu}" 
                         class="img-fluid img-cinza" 
                         alt="${t.nomeLiga}"
                          
                         >
                </div>
                <h5 class="mb-1">${t.nomeLiga}</h5>
                <p class="small mb-0" style="color:rgb(74, 152, 107);">${t.anos.join(', ')}</p>
            `;
        
            trofeusContainer.appendChild(col);
        
          });
      })
      .catch(err => console.error( err));

}

//fetch faq section
function fetchFAQ() {
  const faqApiURL = 'http://localhost:3000/faq';

  fetch(faqApiURL)
    .then(res => res.json())
    .then(data => {
      const faqContainer = document.getElementById("faqAccordion");

      data.forEach((item, index) => {
        const faqItem = document.createElement("div");
        faqItem.className = "accordion-item";

        faqItem.innerHTML = `
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
              ${index + 1}. ${item.pergunta}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              ${item.resposta}
            </div>
          </div>
        `;

        faqContainer.appendChild(faqItem);
      });
    })
    .catch(err => console.error(err));
}


document.addEventListener("DOMContentLoaded", function () {
  // Tooltips Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Transição de links com fade-out
  const links = document.querySelectorAll(".transition-link");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.href;
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });

  // Fetch APIs
  fetchNoticias();
  fetchJogadores();
  fetchTrofeus();
  fetchFAQ();
});