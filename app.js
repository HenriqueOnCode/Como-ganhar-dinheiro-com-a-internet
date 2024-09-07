function pesquisar() {
  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

  if (campoPesquisa == "") {
    section.innerHTML = "Nenhuma área foi encontrada"
    return
  }
  

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
  for (let dado of dados) {
    
    titulo = dado.titulo.toLowerCase()    
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">| Clique aqui para ver
           um vídeo |</a>
      </div>
    `;
    }

    console.log(dado.titulo.includes(campoPesquisa))

    // Constrói o HTML para cada item da pesquisa

  }


  if (!resultados) {
  resultados = "<p>Nenhuma área foi encontrada. Você precisa digitar algo relevante à plataformas que você pode ganhar dinheiro</p>"

  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}






