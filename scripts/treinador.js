function getTreinadorIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function fetchTreinadorDetalhes() {
    
    const treinadorId = getTreinadorIdFromURL();

    const apiUrl = `http://localhost:3000/equipa-tecnica/${treinadorId}`;

    fetch(apiUrl)
    .then((res) => (res.json()))
    .then((t) => {

        console.log(t);

        const containerTreinador = document.getElementById('detalhesTreinador');

        containerTreinador.innerHTML = `
            <div class="row g-4 d-flex justify-content-center">
            <div class="col-12 col-lg-4">
                <div class="card mb-4">
                    <div class="ratio ratio-1x1">
                        <img src="${t.imagemPerfil}" class="img-fluid object-fit-cover" alt="${t.nome}" style="object-position: top;">
                    </div>
                    <div class="card-body">
                    <div class="d-flex justify-content-between text-center">
                        <h1 class="fs-3 fw-bold">
                            ${t.nome}
                        </h1>
                        <h1 class="fs-3 fw-bold">${t.cargoAbreviado}</h1>
                        </div>
                        <div class="text-secondary">
                            <span>${t.cargo}</span>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6 d-flex align-items-baseline">
                                <p class="me-2 fs-6 fw-light">Idade:</p>
                                <p class="fs-5 fw-medium">${t.idade}</p>
                            </div>
                            <div class="col-6 mt-3"><span class="fi fi-${t.codigo} me-2"></span> ${t.nacionalidade}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Linha Temporal da Carreira</h5>
                    </div>
                    <div class="card-body timeline">
                        <ul class="text-muted">${t.clubesAnteriores.map(c => `<li>${c.nome} (${c.ano})</li>`).join('')}</ul>
                    </div>
                </div>
                

                <div class="card mb-4">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Biografia</h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted lh-base fs-6">${t.biografia}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    .catch((err) => {
        console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchTreinadorDetalhes();
});