// ========== DADOS DOS ITENS - CAPACETES AGORA EM DESTAQUE ==========
const itensF1 = [
  {
    id: 1,
    titulo: "Carros Icônicos",
    imagem: "./img/ferrari-car1.jpg",
    imagemSecundaria: [
      "./img/ferrari-car2.jpg",
      "./img/ferrari-car3.jpg",
      "./img/F1BLUE2.jpg",
      "./img/ferrari malrboro.jpg",
    ],
    descricaoCurta: "Modelos lendários que marcaram época na Fórmula 1.",
    descricaoLonga: "A Fórmula 1 é repleta de carros que se tornaram lendas...",
    especificacoes: {
      motor: "V6 Turbo Híbrido",
      potencia: "Mais de 1000 cv",
      peso: "Aproximadamente 750 kg",
      ano: "Décadas de 80 aos anos 2000",
      fabricante: "Vários (Ferrari, McLaren, Williams, etc.)",
    },
    curiosidades: [
      "O Williams FW14B foi pioneiro em controles eletrônicos",
      "O Ferrari F2004 venceu 15 das 18 corridas em 2004",
      "O McLaren MP4/4 tem a maior taxa de vitórias da história (93.8%)",
    ],
    emDestaque: false,
  },
  {
    id: 2,
    titulo: "Capacetes Históricos",
    imagem: "./img/helmet1.jpg",
    imagemSecundaria: [
      "./img/sena helmet.jpg",
      "./img/helmet sauber.jpg",
      "./img/hamilton helmet.jpg",
      "./img/verstapa helmet.jpg",
    ],
    descricaoCurta: "Designs que contam histórias de velocidade e coragem.",
    descricaoLonga:
      "Os capacetes na F1 são mais do que equipamentos de segurança...",
    especificacoes: {
      material: "Fibra de carbono e kevlar",
      peso: "Aproximadamente 1.2 kg",
      certificacao: "Padrão FIA 8860-2018",
      visor: "Policarbonato anti-embaçante",
      personalizacao: "Design único por piloto",
    },
    curiosidades: [
      "Ayrton Senna mudou seu design apenas uma vez na carreira",
      "Lewis Hamilton introduziu designs temporários para causas sociais",
      "Os capacetes modernos custam até R$ 50.000",
    ],
    emDestaque: true,
  },
  {
    id: 3,
    titulo: "Pistas Memoráveis",
    imagem: "./img/psita-monaco1.jpg",
    imagemSecundaria: [
      "./img/psita-monaco2.jpg",
      "./img/psita-monaco3.jpg",
      "./img/skysat.jpg",
      "./img/barcelona circ.jpg",
    ],
    descricaoCurta: "Os circuitos mais desafiadores e icônicos do mundo.",
    descricaoLonga: "Monaco, Silverstone, Monza, Spa-Francorchamps...",
    especificacoes: {
      extensao: "Varia de 3.3km a 7km",
      curvas: "De 12 a 20 curvas por circuito",
      recorde: "Lewis Hamilton em Silverstone (1:27.097)",
      altitude: "Spa tem variação de 102 metros",
      pais: "Vários países",
    },
    curiosidades: [
      "Monaco é o circuito mais lento do calendário",
      "Spa-Francorchamps tem a curva Eau Rouge/Raidillon icônica",
      "Interlagos é o único circuito no hemisfério sul",
    ],
    emDestaque: false,
  },
  {
    id: 4,
    titulo: "Peças de Engenharia",
    imagem: "./img/peças-car-f1.jpg",
    imagemSecundaria: [
      "./img/peças-car-f1-2.jpg",
      "./img/peças-car-f1-3.jpg",
      "./img/volante engenharia.jpg",
      "./img/motor fer.jpg",
    ],
    descricaoCurta: "Componentes que definem performance e inovação.",
    descricaoLonga:
      "A engenharia da F1 está na vanguarda da tecnologia automotiva...",
    especificacoes: {
      material: "Fibra de carbono e titânio",
      tolerancia: "Precisão de até 0.001mm",
      desenvolvimento: "Milhares de horas de CFD e túnel de vento",
      custo: "Milhões em P&D por componente",
      aplicacao: "Aerodinâmica, motor, transmissão",
    },
    curiosidades: [
      "As asas dianteiras têm mais de 100 componentes individuais",
      "Os freios carbon-carbon funcionam melhor a 600°C",
      "O câmbio pode trocar marchas em 0.05 segundos",
    ],
    emDestaque: false,
  },
];

// ========== FUNÇÃO PRINCIPAL PARA CARREGAR CARDS ==========
function carregarCards() {
  const container = document.getElementById("cards-container");
  const destaqueContainer = document.getElementById("destaque-container");

  // ========== CARREGAR CARD EM DESTAQUE COM CARROSSEL INTEGRADO (CAPACETES) ==========
  if (destaqueContainer) {
    const itemDestaque = itensF1.find((item) => item.emDestaque);

    if (itemDestaque) {
      // PARA O CARROSSEL: usar apenas 3 imagens (principal + 2 secundárias)
      const imagensCarrossel = [
        itemDestaque.imagem,
        ...(itemDestaque.imagemSecundaria || []).slice(0, 2), // Apenas 2 primeiras secundárias
      ];

      destaqueContainer.innerHTML = `
        <div class="col-12 col-lg-10 destaque-com-carrossel">
          <div class="card bg-dark h-100 text-center card-destaque">
            <div class="row g-0 h-100">
              <!-- ========== COLUNA DO CARROSSEL ========== -->
              <div class="col-12 col-md-7">
                <div class="destaque-carrossel-container h-100">
                  <div class="destaque-carrossel-imagens">
                    ${imagensCarrossel
                      .map(
                        (imagem, index) => `
                      <div class="destaque-carrossel-item ${
                        index === 0 ? "ativo" : ""
                      }">
                        <img src="${imagem}" class="card-img-top h-100 w-100" alt="${
                          itemDestaque.titulo
                        } - Imagem ${index + 1}" 
                             style="object-fit: contain; padding: 20px;" />
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                  
                  <!-- Botões de navegação do carrossel -->
                  <button class="btn btn-carrossel position-absolute top-50 start-0 translate-middle-y ms-3" id="btn-anterior-destaque">
                    <span style="font-size: 1.5rem;">←</span>
                  </button>
                  <button class="btn btn-carrossel position-absolute top-50 end-0 translate-middle-y me-3" id="btn-proximo-destaque">
                    <span style="font-size: 1.5rem;">→</span>
                  </button>
                  
                  <!-- Indicadores do carrossel -->
                  <div class="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                    <div class="d-flex gap-2">
                      ${imagensCarrossel
                        .map(
                          (_, index) => `
                        <span class="indicador ${
                          index === 0 ? "ativo" : ""
                        }" data-index="${index}"></span>
                      `
                        )
                        .join("")}
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- ========== COLUNA DAS INFORMAÇÕES ========== -->
              <div class="col-12 col-md-5 d-flex align-items-center">
                <div class="card-body destaque-info h-100 d-flex flex-column justify-content-center p-4">
                  <h3 class="card-title text-warning mb-3">${
                    itemDestaque.titulo
                  }</h3>
                  <p class="card-text text-light fs-5 mb-4">${
                    itemDestaque.descricaoCurta
                  }</p>
                  <div class="mt-auto">
                    <a href="detalhes.html?id=${
                      itemDestaque.id
                    }" class="btn btn-warning btn-destaque btn-lg">Ver Detalhes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      inicializarCarrosselDestaque(imagensCarrossel, itemDestaque.titulo);
    }
  }

  // ========== CARREGAR CARDS NORMAIS ==========
  if (container) {
    const todosItens = itensF1.filter((item) => !item.emDestaque);

    container.innerHTML = `
      <div class="row justify-content-center">
        ${todosItens
          .map(
            (item) => `
            <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-4">
                <div class="card bg-dark border border-secondary h-100 text-center card-item" style="width: 100%; max-width: 350px;">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}" style="height: 200px; object-fit: cover" />
                    <div class="card-body">
                        <h4 class="card-title text-danger">${item.titulo}</h4>
                        <p class="card-text text-secondary">${item.descricaoCurta}</p>
                        <a href="detalhes.html?id=${item.id}" class="btn btn-outline-danger">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}

// ========== FUNÇÃO PARA INICIALIZAR CARROSSEL NO ITEM EM DESTAQUE ==========
function inicializarCarrosselDestaque(imagens, titulo) {
  let imagemAtualIndex = 0;
  const itens = document.querySelectorAll(".destaque-carrossel-item");
  const indicadores = document.querySelectorAll(
    ".destaque-carrossel-container .indicador"
  );
  const btnAnterior = document.getElementById("btn-anterior-destaque");
  const btnProximo = document.getElementById("btn-proximo-destaque");

  function mostrarImagem(index) {
    itens.forEach((item) => item.classList.remove("ativo"));
    itens[index].classList.add("ativo");

    indicadores.forEach((indicador, i) => {
      if (i === index) {
        indicador.style.backgroundColor = "#e10600";
        indicador.classList.add("ativo");
      } else {
        indicador.style.backgroundColor = "#6c757d";
        indicador.classList.remove("ativo");
      }
    });
  }

  function proximaImagem() {
    imagemAtualIndex = (imagemAtualIndex + 1) % imagens.length;
    mostrarImagem(imagemAtualIndex);
  }

  function imagemAnterior() {
    imagemAtualIndex = (imagemAtualIndex - 1 + imagens.length) % imagens.length;
    mostrarImagem(imagemAtualIndex);
  }

  if (btnProximo) {
    btnProximo.addEventListener("click", proximaImagem);
  }

  if (btnAnterior) {
    btnAnterior.addEventListener("click", imagemAnterior);
  }

  indicadores.forEach((indicador, index) => {
    indicador.addEventListener("click", () => {
      imagemAtualIndex = index;
      mostrarImagem(imagemAtualIndex);
    });
  });

  setInterval(proximaImagem, 5000);
  mostrarImagem(0);
}

// ========== FUNÇÃO PARA CARREGAR DETALHES DO ITEM ==========
function carregarDetalhes() {
  const container = document.getElementById("detalhes-container");
  const imagensAdicionaisContainer =
    document.getElementById("imagens-adicionais");

  if (container) {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get("id"));

    const item = itensF1.find((i) => i.id === itemId);

    if (item) {
      container.innerHTML = `
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-danger mb-4 text-center">${
                          item.titulo
                        }</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 mb-4">
                        <img src="${
                          item.imagem
                        }" class="img-fluid rounded border border-secondary w-100" alt="${
        item.titulo
      }" 
                             style="max-height: 400px; object-fit: contain; background-color: #1a1a1a; padding: 20px;" />
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="bg-dark bg-opacity-50 p-4 rounded border border-secondary">
                            <h4 class="text-warning mb-3">Informações Gerais</h4>
                            <p class="lead text-light mb-4">${
                              item.descricaoLonga
                            }</p>
                            
                            <h5 class="text-info mt-4">Especificações Técnicas</h5>
                            <ul class="list-unstyled">
                                ${Object.entries(item.especificacoes)
                                  .map(
                                    ([chave, valor]) => `
                                    <li class="mb-2 border-bottom border-secondary pb-1">
                                        <strong class="text-light">${
                                          chave.charAt(0).toUpperCase() +
                                          chave.slice(1)
                                        }:</strong> 
                                        <span class="text-warning">${valor}</span>
                                    </li>
                                `
                                  )
                                  .join("")}
                            </ul>
                            
                            <h5 class="text-info mt-4">Curiosidades</h5>
                            <ul class="list-unstyled">
                                ${item.curiosidades
                                  .map(
                                    (curiosidade) => `
                                    <li class="mb-2">
                                        <span class="text-light">• ${curiosidade}</span>
                                    </li>
                                `
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            `;

      // CORREÇÃO: MOSTRAR APENAS AS IMAGENS QUE NÃO FORAM USADAS NO CARROSSEL
      if (
        imagensAdicionaisContainer &&
        item.imagemSecundaria &&
        item.imagemSecundaria.length > 0
      ) {
        // Pular as 2 primeiras imagens que já foram usadas no carrossel
        const imagensParaDetalhes = item.imagemSecundaria.slice(2);

        if (imagensParaDetalhes.length > 0) {
          imagensAdicionaisContainer.innerHTML = `
            <h3 class="text-warning mb-3">Mais Imagens</h3>
            <div class="row g-3">
              ${imagensParaDetalhes
                .map(
                  (foto, index) => `
                  <div class="col-12 col-md-6 col-lg-3">
                      <img src="${foto}" class="img-fluid rounded border border-secondary imagem-adicional w-100" 
                           alt="Imagem adicional ${index + 1} do ${
                    item.titulo
                  }" 
                           style="height: 200px; object-fit: contain; background-color: #1a1a1a; padding: 10px;" />
                  </div>
              `
                )
                .join("")}
            </div>
          `;
        } else {
          // Se não há imagens adicionais, esconder a seção
          imagensAdicionaisContainer.innerHTML = "";
        }
      }
    } else {
      container.innerHTML = `
                <div class="text-center">
                    <h2 class="text-danger">Item não encontrado</h2>
                    <p>O item solicitado não existe em nossa base de dados.</p>
                </div>
            `;
    }
  }
}

// ========== INICIALIZAÇÃO DA APLICAÇÃO ==========
document.addEventListener("DOMContentLoaded", function () {
  if (
    document.getElementById("cards-container") ||
    document.getElementById("destaque-container")
  ) {
    carregarCards();
  }

  if (document.getElementById("detalhes-container")) {
    carregarDetalhes();
  }
});
