function gerarId() {
  return crypto.randomUUID(); 
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [colecoesRes, acessoriosRes] = await Promise.all([
      fetch("/colecoes"),
      fetch("/acessorios"),
    ]);

    const colecoes = await colecoesRes.json();
    const acessorios = await acessoriosRes.json();

    const colecoesContainer = document.getElementById("colecoes-container");
    const acessoriosContainer = document.getElementById("acessorios-container");
    const carousel = document.getElementById("carousel-itens");

    colecoes.forEach((colecao, index) => {
      // Se o post não tiver ID, gera um
      if (!colecao.id) {
        colecao.id = gerarId();
      }

      if (colecao.destaque) {
        const activeClass = index === 0 ? "active" : "";
        carousel.innerHTML += `
          <div class="carousel-item ${activeClass}" data-bs-interval="8000">
            <img src="${colecao.imagem_principal}" class="d-block w-100" alt="${colecao.titulo}">
            <div class="carousel-caption d-none d-md-block">
              <h5>${colecao.titulo}</h5>
              <p>${colecao.descricao}</p>
            </div>
          </div>`;
      }

      colecoesContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${colecao.imagens_complementares[0].src}" class="card-img-top img-fluid" alt="${colecao.titulo}" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${colecao.titulo}</h5>
              <p class="card-text desc">${colecao.descricao}</p>
              <a href="detalhes.html?id=${colecao.id}" class="btn btn-outline-dark mt-auto">Ver mais</a>
            </div>
          </div>
        </div>`;
    });

    acessorios.forEach((acessorio) => {
      if (!acessorio.id) {
        acessorio.id = gerarId();
      }

      acessoriosContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${acessorio.imagem_principal}" class="card-img-top img-fluid" alt="${acessorio.titulo}" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${acessorio.titulo}</h5>
              <p class="card-text desc">${acessorio.descricao}</p>
              <a href="detalhes.html?id=${acessorio.id}" class="btn btn-outline-dark mt-auto">Ver mais</a>
            </div>
          </div>
        </div>`;
    });

  } catch (error) {
    console.error("Erro ao carregar os dados do servidor:", error);
  }
});