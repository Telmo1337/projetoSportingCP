//implementar função para criar todos os jogos previstos época 25/26

function mostrarJogos() {

    jogosApiURL = 'http://localhost:3000/jogos';

    fetch(jogosApiURL)
        .then((res) => res.json())
        .then((data) => {

            console.log('teste: ', data);


            const jogosContainer = document.getElementById("jogosContainer");

            data.forEach((j) => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-4';

                col.innerHTML = `
                    <div class="card h-100">
                        <h4>${j.equipaCasa}</h4>
                        <h4>${j.equipaFora}</h4>
                    </div>
                `;
                jogosContainer.appendChild(col);
            })
            //error event
            .catch((err) => console.log(err));
        })
}
document.addEventListener('DOMContentLoaded', mostrarJogos);
