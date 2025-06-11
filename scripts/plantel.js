let todosJogadores = [];

function fetchPlantel() {
    const apiUrl = 'http://localhost:3000/jogadores';

    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            todosJogadores = data;
            renderizarJogadores(data);
        })
        .catch((err) => console.error(err));
}

function renderizarJogadores(jogadores) {
    const jogadoresContainer = document.getElementById("jogadoresContainer");
    
    jogadoresContainer.innerHTML = '';

    jogadores.forEach((j) => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
            <a href="jogador.html?id=${j.id}">
                <img src="${j.imagem}" class="img-fluid" style="width:90%; cursor: pointer;">
            </a>
            <div class="d-flex flex-row align-items-baseline">
                <h1 class="display-1 fw-bold me-2" style="color: #006633;">${j.numero}</h1>
                <h2 class="fs-4 fw-normal">${j.nomeAbreviado}</h2>
            </div>
        `;

        jogadoresContainer.appendChild(col);
    });
}

//filtar os jogadores por posição

function filtrarPorPosicao(posicao) {
    const posicaoNormalizada = posicao.toLowerCase();

    if (posicaoNormalizada === 'todos') {
        renderizarJogadores(todosJogadores);
    } else {
        const filtrados = todosJogadores.filter(j => 
            j["posição"]?.toLowerCase() === posicaoNormalizada
        );
        renderizarJogadores(filtrados);
    }
}


function fetchTreinadores() {
    const apiUrl = 'http://localhost:3000/equipa-tecnica';

    fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            const treinadoresContainer = document.getElementById("treinadoresContainer");

            data.forEach((t) => {
                const col = document.createElement('div');
                col.className = 'col';

                col.innerHTML = `
                    <a href="treinador.html?id=${t.id}">
                        <img src="${t.imagem}" class="img-fluid" style="width:90%; cursor: pointer;">
                    </a>
                    <div class="d-flex flex-row align-items-baseline">
                        <h1 class="display-4 fw-bold me-2" style="color: #006633;">${t.cargoAbreviado}</h1>
                        <h2 class="fs-4 fw-normal">${t.nomeAbreviado}</h2>
                    </div>
                `;
                treinadoresContainer.appendChild(col);
            });
        })
        .catch((err) => console.error(err));
}

document.addEventListener('DOMContentLoaded', function () {
    fetchPlantel();
    fetchTreinadores();
});
