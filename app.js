/**
 * Função responsável por pesquisar dados e exibir os resultados em uma seção HTML.
 * 
 * **Pré-condições:**
 * - Existe um array global chamado `dados` contendo objetos com as propriedades `titulo`, `descricao` e `link`.
 * - Existe um elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
 * 
 * **Pós-condições:**
 * - A seção HTML com o ID "resultados-pesquisa" será preenchida com divs que representam cada item encontrado na pesquisa.
 * - Cada div conterá o título, descrição e link do item, formatados como HTML.
 */ 
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado! Você precisa informar o nome de um jogo ou gênero.</p>";
        return // finaliza a execução
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";

    // Itera sobre os dados da pesquisa e constrói o HTML dos resultados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tag.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais Informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<p>Nenhuma informação foi encontrada!</p>"
        return
    }

    // Atualiza o conteúdo da seção HTML com os resultados
    section.innerHTML = resultados;
}