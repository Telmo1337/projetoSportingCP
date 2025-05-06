//function => fetch jogadores
function mostrarJogadores() {

  jogadoresApiURL = 'http://localhost:3000/jogadores';

  fetch(jogadoresApiURL)
    .then((res) => res.json())
    .then((data) => {

      console.log('teste: ', data);

      const jogadoresContainer = document.getElementById("jogadoresContainer");

      data.forEach((jogador, index) => {

        console.log(index, jogador.nome);
        
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';

        col.innerHTML = `
          <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="position-relative">
            <img src="${jogador.imagem}" class="card-img-top img-fluid mx-auto d-block" 
                  style=" object-fit: cover; width: 50%;">
              <div class="position-absolute top-0 end-0 m-2">
                <span class="badge bg-dark-subtle text-dark fw-semibold border border-2 border-white rounded-circle p-2 fs-6 d-flex align-items-center justify-content-center" 
                      style="width: 42px; height: 42px;">${jogador.numero}</span>
              </div>
            </div>
            <div class="card-body px-3 pb-3 pt-2">
              <h5 class="card-title fw-semibold text-dark mb-1 text-center">${jogador.nome}</h5>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-success-subtle text-success fw-medium">${jogador.posição}</span>
                <small class="text-muted d-flex align-items-center">
                  <span class="fi fi-${jogador.codigo} me-2"></span> ${jogador.nacionalidade}
                </small>
              </div>
              <div class="row g-1 text-center">
                <div class="col-4">
                  <div class="bg-light rounded-3 py-2">
                    <small class="text-muted">Idade</small>
                    <div class="fw-bold">${jogador.idade}</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="bg-light rounded-3 py-2">
                    <small class="text-muted">Altura</small>
                    <div class="fw-bold">${jogador.altura}</div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="bg-light rounded-3 py-2">
                    <small class="text-muted">Peso</small>
                    <div class="fw-bold">${jogador.peso}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        jogadoresContainer.appendChild(col);
      });
    })

    .catch(err => console.error( err));
    
}

//function => fetch equipa tecnica
function mostrarEquipaTecnica() {


  apiURL = 'http://localhost:3000/equipa-tecnica'; 


  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {

      const equipaTecnicaContainer = document.getElementById("equipaTecnicaContainer");

      data.forEach((tecnico) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';

        col.innerHTML = `
        <div class="card h-100 card-jogo-hover border-0 shadow-sm rounded-4 overflow-hidden">
          <img src="${tecnico.imagem}" class="card-img-top img-fluid mx-auto d-block" 
                style=" object-fit: cover; width: 50%;">
          <div class="card-body px-3 pb-3 pt-2">
            <h5 class="card-title fw-semibold text-dark mb-1 text-center">${tecnico.nome}</h5>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="badge bg-success-subtle text-success fw-medium">${tecnico.cargo}</span>
              <small class="text-muted d-flex align-items-center">
                <span class="fi fi-${tecnico.codigo} me-2"></span> ${tecnico.nacionalidade}
              </small>
            </div>
          </div>
        </div>
      `;

        equipaTecnicaContainer.appendChild(col);
      })


})
}


document.addEventListener('DOMContentLoaded', function() {
  mostrarJogadores();
  mostrarEquipaTecnica();
})





