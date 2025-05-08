function fetchPlantel() {

    const apiUrl = 'http://localhost:3000/jogadores';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then((res) => (res.json()))
    .then((data) => {
        console.log(data);

        const jogadoresContainer = document.getElementById("jogadoresContainer");

        data.forEach((j) => {
            const col = document.createElement('div');
            col.className = 'col ';
            
            col.innerHTML = `
                <a href="jogador.html?id=${j.id}">
                    <img src="${j.imagem}" class="img-fluid" style="width:90%; cursor: pointer;">
                </a>
                <div class="d-flex flex-row align-items-baseline">
                    <h1 class="display-1 fw-bold me-2" style="color: #006633;">${j.numero}</h1>
                    <h2 class="fs-1 fw-light">${j.nomeAbreviado}</h2>
                </div>
            `;

            jogadoresContainer.appendChild(col);
        })

        }
    )
}

document.addEventListener('DOMContentLoaded', function() {
    fetchPlantel();
  })
  