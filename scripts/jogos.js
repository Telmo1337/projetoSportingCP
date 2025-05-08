function mostrarJogos() {
  const jogosApiURL = 'http://localhost:3000/jogos';

  fetch(jogosApiURL)
    .then((res) => res.json())
    .then((data) => {
      console.log('Jogos recebidos: ', data);

      const jogosContainer = document.getElementById("jogosContainer");
      jogosContainer.innerHTML = "";

      data.forEach((jogo) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';

        col.innerHTML = `
           <div class="card shadow ">
              <div class="card-header bg-primary text-white">
                <h5 class="card-title mb-0">${jogo.data}</h5>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="text-center w-100">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="text-center" style="width: 40%">
                        <img src="${jogo.equipaCasa.equipaImagem}" alt="${jogo.equipaCasa.equipaNome}" style="height: 40px;">
                        <br>
                        <span class="fs-5 fw-bold">${jogo.equipaCasa.equipaNome}</span>
                      </div>
                      <div style="width: 20%">
                        <span class="badge bg-secondary mx-2">VS</span>
                      </div>
                      <div class="text-center" style="width: 40%">
                        <img src="${jogo.equipaFora.equipaImagem}" alt="${jogo.equipaFora.equipaNome}" style="height: 40px;">
                        <br>
                        <span class="fs-5 fw-bold">${jogo.equipaFora.equipaNome}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="card-text">
                  <strong>Local:</strong> ${jogo.local}<br>
                  <strong>Horário:</strong> ${jogo.horario}
                </p>
                <button 
                  class="btn btn-success w-100 buy-ticket" 
                  data-bs-toggle="modal" 
                  data-bs-target="#ticketModal"
                  data-index="${jogo.id}">
                  Comprar Bilhetes
                </button>
              </div>
            </div>

          `;

        jogosContainer.appendChild(col);
      });

      // event listener para o botão "Comprar Bilhetes"
      document.querySelectorAll('.buy-ticket').forEach((button) => {
        button.addEventListener('click', function () {
          // console.log("btn click teste");
          console.log("btn click teste"); 



          const jogoIndex = this.getAttribute('data-index');

          const jogo = data[jogoIndex]; 

          document.getElementById('jogoTitulo').textContent = `${jogo.equipaCasa.equipaNome} vs ${jogo.equipaFora.equipaNome}`;
          document.getElementById('jogoData').textContent = jogo.data;
          document.getElementById('jogoHorario').textContent = jogo.horario;
          document.getElementById('jogoLocal').textContent = jogo.local;
        });
      });

    })
    .catch((err) => console.log('erro:', err));
}

document.addEventListener('DOMContentLoaded', function () {
  mostrarJogos();

  // finalizar a compra dos bilhetyes
  document.getElementById('finalizarCompra').addEventListener('click', function() {
    alert('Compra realizada. Bilhetes serão enviados para o seu email.');
  
    // bootstrap modal para fechar o modal
    const modalElement = new bootstrap.Modal(document.getElementById('ticketModal'));
    modalElement.hide();  // fecha o modal e remove o backdrop
  });
  
});



