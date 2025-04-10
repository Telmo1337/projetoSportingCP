//function => fetch noticias
function fetchNoticias() {

    noticiasApiURL = 'http://localhost:3000/noticias';
    
    fetch(noticiasApiURL)
      .then((res) => res.json())
      .then((data) => {
    
        console.log('test: ', data);
    
        const noticiasContainer = document.getElementById("noticiasContainer");
    
        data.forEach((n) => {
          const col = document.createElement('div');
          col.className = 'col-md-6 col-lg-4 col-xl-3';
        
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
          noticiasContainer.appendChild(col);
        })
          //evento erro
        .catch((err) => {
          console.error(err);
        })
      })
    }
    document.addEventListener('DOMContentLoaded', fetchNoticias);