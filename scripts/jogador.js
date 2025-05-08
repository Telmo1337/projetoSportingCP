function getJogadorIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function fetchJogadorDetalhes() {
    const jogadorId = getJogadorIdFromURL();
    const apiUrl = `http://localhost:3000/jogadores/${jogadorId}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(j => {
            const container = document.getElementById("detalhesJogador");
            container.innerHTML = `
                <div class="text-center">
                    <img src="${j.imagem}" class="img-fluid mb-3" style="max-width: 300px;">
                    <h1>${j.nome}</h1>
                    <p>Número: ${j.numero}</p>
                    <p>Posição: ${j.posição}</p>
                    <p>Idade: ${j.idade}</p>
                    <span class="fi fi-${j.codigo} me-2"></span> ${j.nacionalidade}
                </div>
            `;
        })
        .catch(err => {
            console.error("Erro ao carregar jogador:", err);
        });
}

document.addEventListener('DOMContentLoaded', fetchJogadorDetalhes);
