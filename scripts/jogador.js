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
                <div class="row g-4 d-flex justify-content-center">
            <div class="col-12 col-lg-4">
                <div class="card mb-4">
                    <div class="ratio ratio-1x1">
                        <img src="${j.imagemPerfil}" class="img-fluid object-fit-cover" alt="${j.nome}" style="object-position: top;">
                    </div>
                    <div class="card-body">
                    <div class="d-flex justify-content-between text-center">
                        <h1 class="fs-3 fw-bold">
                            ${j.nome}
                        </h1>
                        <h1 class="fs-3 fw-bold">${j.numero}</h1>
                        </div>
                        <div class="text-secondary">
                            <span>${j.posição}</span>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6 d-flex align-items-baseline">
                                <p class="me-2 fs-6 fw-light">Idade:</p>
                                <p class="fs-5 fw-medium">${j.idade}</p>
                            </div>
                            <div class="col-6 d-flex align-items-baseline">
                                <p class="me-2 fs-6 fw-light">Altura:</p>
                                <p class="fs-5 fw-medium">${j.altura}</p>
                            </div>
                            <div class="col-6 mt-3 d-flex align-items-baseline">
                                <p class="me-2 fs-6 fw-light">Peso:</p>
                                <p class="fs-5 fw-medium">${j.peso}</p>
                            </div>
                            <div class="col-6 mt-3"><span class="fi fi-${j.codigo} me-2"></span> ${j.nacionalidade}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Estatísticas de Carreira</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">teste</p>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Linha Temporal da Carreira</h5>
                    </div>
                    <div class="card-body timeline">
                        <p class="text-muted">teste</p>
                    </div>
                </div>
                
                 <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Conquistas</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">teste</p>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Biografia</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted lh-base fs-6">${j.biografia}</p>
                    </div>
                </div>
            </div>
        </div>
            `;
        })
        .catch(err => {
            console.error("Erro ao carregar jogador:", err);
        });
}

document.addEventListener('DOMContentLoaded', fetchJogadorDetalhes);
