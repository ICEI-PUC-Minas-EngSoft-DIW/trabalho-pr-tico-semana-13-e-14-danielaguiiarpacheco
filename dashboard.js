// ========== DADOS DOS ITENS - MESMA ESTRUTURA DO app.js ==========
const itensF1 = [
  {
    id: 1,
    titulo: "Carros Icônicos",
    categoria: "carros",
    emDestaque: false,
    especificacoes: {
      motor: "V6 Turbo Híbrido",
      potencia: "Mais de 1000 cv",
      peso: "Aproximadamente 750 kg",
      ano: "Décadas de 80 aos anos 2000",
      fabricante: "Vários (Ferrari, McLaren, Williams, etc.)",
    },
  },
  {
    id: 2,
    titulo: "Capacetes Históricos",
    categoria: "capacetes",
    emDestaque: true,
    especificacoes: {
      material: "Fibra de carbono e kevlar",
      peso: "Aproximadamente 1.2 kg",
      certificacao: "Padrão FIA 8860-2018",
      visor: "Policarbonato anti-embaçante",
      personalizacao: "Design único por piloto",
    },
  },
  {
    id: 3,
    titulo: "Pistas Memoráveis",
    categoria: "pistas",
    emDestaque: false,
    especificacoes: {
      extensao: "Varia de 3.3km a 7km",
      curvas: "De 12 a 20 curvas por circuito",
      recorde: "Lewis Hamilton em Silverstone (1:27.097)",
      altitude: "Spa tem variação de 102 metros",
      pais: "Vários países",
    },
  },
  {
    id: 4,
    titulo: "Peças de Engenharia",
    categoria: "engenharia",
    emDestaque: false,
    especificacoes: {
      material: "Fibra de carbono e titânio",
      tolerancia: "Precisão de até 0.001mm",
      desenvolvimento: "Milhares de horas de CFD e túnel de vento",
      custo: "Milhões em P&D por componente",
      aplicacao: "Aerodinâmica, motor, transmissão",
    },
  },
];

// ========== FUNÇÃO PARA INICIALIZAR TODOS OS GRÁFICOS ==========
function inicializarDashboard() {
  criarGraficoCategorias();
  criarGraficoDestaque();
  criarGraficoEspecificacoes();
  atualizarResumoAcervo();
}

// ========== GRÁFICO DE DISTRIBUIÇÃO POR CATEGORIA ==========
function criarGraficoCategorias() {
  const ctx = document.getElementById("categoriaChart").getContext("2d");

  // Contar itens por categoria
  const categorias = {};
  itensF1.forEach((item) => {
    categorias[item.categoria] = (categorias[item.categoria] || 0) + 1;
  });

  const labels = Object.keys(categorias).map(
    (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
  );
  const data = Object.values(categorias);

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "#e10600", // Vermelho F1
            "#ff6b6b", // Vermelho claro
            "#ffc107", // Amarelo
            "#17a2b8", // Azul
          ],
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#fff",
            font: {
              family: "Orbitron",
              size: 12,
            },
          },
        },
        title: {
          display: true,
          text: "Distribuição dos Itens por Categoria",
          color: "#fff",
          font: {
            family: "Orbitron",
            size: 16,
          },
        },
      },
    },
  });
}

// ========== GRÁFICO DE ITENS EM DESTAQUE ==========
function criarGraficoDestaque() {
  const ctx = document.getElementById("destaqueChart").getContext("2d");

  const emDestaque = itensF1.filter((item) => item.emDestaque).length;
  const normais = itensF1.length - emDestaque;

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Em Destaque", "Itens Normais"],
      datasets: [
        {
          data: [emDestaque, normais],
          backgroundColor: [
            "#ffc107", // Amarelo para destaque
            "#6c757d", // Cinza para normais
          ],
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#fff",
            font: {
              family: "Orbitron",
              size: 12,
            },
          },
        },
        title: {
          display: true,
          text: "Proporção de Itens em Destaque",
          color: "#fff",
          font: {
            family: "Orbitron",
            size: 16,
          },
        },
      },
    },
  });
}

// ========== GRÁFICO DE ESPECIFICAÇÕES ==========
function criarGraficoEspecificacoes() {
  const ctx = document.getElementById("especificacoesChart").getContext("2d");

  // Contar tipos de especificações únicas
  const tiposEspecificacao = new Set();
  itensF1.forEach((item) => {
    Object.keys(item.especificacoes).forEach((esp) => {
      tiposEspecificacao.add(esp);
    });
  });

  // Contar ocorrências de cada tipo de especificação
  const contagemEspecificacoes = {};
  tiposEspecificacao.forEach((tipo) => {
    contagemEspecificacoes[tipo] = itensF1.filter(
      (item) => item.especificacoes[tipo]
    ).length;
  });

  const labels = Object.keys(contagemEspecificacoes).map(
    (esp) => esp.charAt(0).toUpperCase() + esp.slice(1)
  );
  const data = Object.values(contagemEspecificacoes);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Número de Itens",
          data: data,
          backgroundColor: "#e10600",
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Especificações por Tipo",
          color: "#fff",
          font: {
            family: "Orbitron",
            size: 16,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#fff",
            font: {
              family: "Orbitron",
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        x: {
          ticks: {
            color: "#fff",
            font: {
              family: "Orbitron",
              size: 11,
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
  });
}

// ========== ATUALIZAR RESUMO DO ACERVO ==========
function atualizarResumoAcervo() {
  const container = document.getElementById("resumo-acervo");

  const totalItens = itensF1.length;
  const itensDestaque = itensF1.filter((item) => item.emDestaque).length;
  const categoriasUnicas = new Set(itensF1.map((item) => item.categoria)).size;

  // Contar total de curiosidades
  const totalCuriosidades = itensF1.reduce((total, item) => {
    return total + (item.curiosidades ? item.curiosidades.length : 0);
  }, 0);

  container.innerHTML = `
        <div class="col-12 col-md-3 mb-3">
            <div class="bg-danger p-3 rounded text-center">
                <h3 class="mb-1">${totalItens}</h3>
                <p class="mb-0">Total de Itens</p>
            </div>
        </div>
        <div class="col-12 col-md-3 mb-3">
            <div class="bg-warning p-3 rounded text-center">
                <h3 class="mb-1">${itensDestaque}</h3>
                <p class="mb-0">Em Destaque</p>
            </div>
        </div>
        <div class="col-12 col-md-3 mb-3">
            <div class="bg-info p-3 rounded text-center">
                <h3 class="mb-1">${categoriasUnicas}</h3>
                <p class="mb-0">Categorias</p>
            </div>
        </div>
        <div class="col-12 col-md-3 mb-3">
            <div class="bg-success p-3 rounded text-center">
                <h3 class="mb-1">${totalCuriosidades}</h3>
                <p class="mb-0">Curiosidades</p>
            </div>
        </div>
    `;
}

// ========== INICIALIZAÇÃO DO DASHBOARD ==========
document.addEventListener("DOMContentLoaded", function () {
  inicializarDashboard();
});
