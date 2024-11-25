// Dados do conteúdo das aulas
const aulas = {
    aula1: {
        video: "https://www.youtube.com/embed/LlGmp0a3t9k?si=ayVU-67JBIF1hvUY&controls=1&autoplay=1&loop=1&mute=0&start=1",
        documentacao: {
            titulo: "Objetivo do Curso",
            descricao: `
          Este curso tem como objetivo fornecer uma compreensão básica e prática do HTML, capacitando o aluno a criar páginas web simples, com textos, links, imagens, listas e outros elementos fundamentais.
        `,
        },
        questoes: [
            {
                pergunta: "Qual atributo é usado para especificar o URL de um link?",
                respostas: [
                    { letra: "a", texto: "href" },
                    { letra: "b", texto: "src" },
                    { letra: "c", texto: "link" },
                    { letra: "d", texto: "url" }
                ]
            },
            {
                pergunta: "Qual propriedade CSS é usada para mudar a cor do texto?",
                respostas: [
                    { letra: "a", texto: "color" },
                    { letra: "b", texto: "font-color" },
                    { letra: "c", texto: "text-color" },
                    { letra: "d", texto: "bgcolor" }
                ]
            }
        ]
    },
    aula2: {
        video: "https://www.youtube.com/embed/M8k5E8j-9sE?controls=1&autoplay=1&loop=1&mute=0&start=1",
        documentacao: {
            titulo: "Aprofundando no CSS",
            descricao: `
          Neste módulo, vamos aprender sobre CSS, que é a linguagem usada para estilizar o HTML e criar layouts bonitos para as páginas web.
        `,
        },
        questoes: [
            {
                pergunta: "Qual propriedade CSS é usada para definir o fundo de uma página?",
                respostas: [
                    { letra: "a", texto: "background-color" },
                    { letra: "b", texto: "color" },
                    { letra: "c", texto: "bg" },
                    { letra: "d", texto: "bgcolor" }
                ]
            },
            {
                pergunta: "O que significa 'em' em CSS?",
                respostas: [
                    { letra: "a", texto: "É uma unidade relativa ao tamanho da tela" },
                    { letra: "b", texto: "É uma unidade relativa ao tamanho da fonte do elemento pai" },
                    { letra: "c", texto: "É uma unidade de tempo" },
                    { letra: "d", texto: "Nenhuma das anteriores" }
                ]
            },
            {
                pergunta: "O que significa 'em' em CSS?",
                respostas: [
                    { letra: "a", texto: "É uma unidade relativa ao tamanho da tela" },
                    { letra: "b", texto: "É uma unidade relativa ao tamanho da fonte do elemento pai" },
                    { letra: "c", texto: "É uma unidade de tempo" },
                    { letra: "d", texto: "Nenhuma das anteriores" }
                ]
            },
            {
                pergunta: "O que significa 'em' em CSS?",
                respostas: [
                    { letra: "a", texto: "É uma unidade relativa ao tamanho da tela" },
                    { letra: "b", texto: "É uma unidade relativa ao tamanho da fonte do elemento pai" },
                    { letra: "c", texto: "É uma unidade de tempo" },
                    { letra: "d", texto: "Nenhuma das anteriores" }
                ]
            }
        ]
    },
    aula3: {
        video: "https://www.youtube.com/embed/SjojxCiWjBY?controls=1&autoplay=1&loop=1&mute=0&start=1",
        documentacao: {
            titulo: "Aprofundando no CSS",
            descricao: `
          Neste módulo, vamos aprender sobre CSS, que é a linguagem usada para estilizar o HTML e criar layouts bonitos para as páginas web.
        `,
        },
        questoes: [
            {
                pergunta: "Qual propriedade CSS é usada para definir o fundo de uma página?",
                respostas: [
                    { letra: "a", texto: "background-color" },
                    { letra: "b", texto: "color" },
                    { letra: "c", texto: "bg" },
                    { letra: "d", texto: "bgcolor" }
                ]
            },
            {
                pergunta: "O que significa 'em' em CSS?",
                respostas: [
                    { letra: "a", texto: "É uma unidade relativa ao tamanho da tela" },
                    { letra: "b", texto: "É uma unidade relativa ao tamanho da fonte do elemento pai" },
                    { letra: "c", texto: "É uma unidade de tempo" },
                    { letra: "d", texto: "Nenhuma das anteriores" }
                ]
            }
        ]
    }
};
let aulaAtual = "aula1";
let respostasCorretas = 0;

function mudarConteudo(aula) {
    // Verifica se a aula existe
    if (!aulas[aula]) {
        console.error("Aula não encontrada!");
        return;
    }

    // Atualiza o vídeo
   let aulaAtual = "aula1";
let respostasCorretas = 0;

function mudarConteudo(aula) {
    if (!aulas[aula]) {
        console.error("Aula não encontrada!");
        return;
    }

    // Atualiza o conteúdo da aula
    aulaAtual = aula;
    const videoIframe = document.getElementById("video-aula");
    videoIframe.src = aulas[aula].video;

    const docTitulo = document.getElementById("documentacao-aula");
    docTitulo.querySelector('h2').textContent = aulas[aula].documentacao.titulo;
    docTitulo.querySelector('p').textContent = aulas[aula].documentacao.descricao;

    const questoesContainer = document.getElementById("questoes-teste");
    questoesContainer.innerHTML = ""; // Limpa as questões atuais

    aulas[aula].questoes.forEach((questao, index) => {
        const divQuestao = document.createElement("div");
        divQuestao.classList.add("question");
        divQuestao.innerHTML = `
        <h5>${questao.pergunta}</h5>
        ${questao.respostas.map(resposta => `
          <input type="radio" name="q${index}" value="${resposta.letra}"> ${resposta.letra}) ${resposta.texto}<br>
        `).join('')}
      `;
        questoesContainer.appendChild(divQuestao);
    });

    // Desabilita o botão de avançar
    document.getElementById("avancar").disabled = true;
    if (aula !== "aula1") {
        document.getElementById("avancar").disabled = false;
    }
}

function submitAnswers() {
    const questoes = document.querySelectorAll('.question');
    let acertos = 0;

    // Verifica as respostas
    questoes.forEach((questao, index) => {
        const selected = questao.querySelector('input[type="radio"]:checked');
        const respostaCorreta = aulas[aulaAtual].questoes[index].respostaCorreta;
        if (selected && selected.value === respostaCorreta) {
            acertos++;
        }
    });

    // Exibe o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Você acertou ${acertos} de ${questoes.length} questões.</h3>`;

    // Habilita o botão de avançar se todas as questões estiverem corretas
    if (acertos === questoes.length) {
        document.getElementById("avancar").disabled = false;
    }
}

function avancarAula() {
    // Avança para a próxima aula
    if (aulaAtual === "aula1") {
        mudarConteudo("aula2");
        document.getElementById("selecionar-aula").value = "aula2";
        document.querySelector('option[value="aula2"]').disabled = false;
    } else if (aulaAtual === "aula2") {
        mudarConteudo("aula3");
        document.getElementById("selecionar-aula").value = "aula3";
        document.querySelector('option[value="aula3"]').disabled = false;
    }
}

mudarConteudo("aula1"); // Começa na primeira aula
