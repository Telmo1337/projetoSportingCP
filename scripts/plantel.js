//function => fetch titulos
function mostrarPlantel() {

    plantelApiURL = 'http://localhost:3000/plantel';
    
    fetch(plantelApiURL)
      .then((res) => res.json())
      .then((data) => {
    
        console.log('teste: ', data);
    
        const plantelContainer = document.getElementById("plantelContainer");
    
        data.forEach((n) => {
          const col = document.createElement('div');
          col.className = 'col-md-6 col-lg-4';
        
          col.innerHTML = `
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${n.titulo}</h5>
                <p class="card-text">${n.content}</p>
              </div>
            </div>
          `;
          plantelContainer.appendChild(col);
        })
          //evento erro
        .catch((err) => {
          console.error(err);
        })
      })
    }
document.addEventListener('DOMContentLoaded', mostrarPlantel);