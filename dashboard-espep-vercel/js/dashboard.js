document.addEventListener("DOMContentLoaded", () => {
  carregarGraficos();
});

function carregarGraficos() {
  // Dados de exemplo — troque pelos seus dados reais da planilha ou API
  const empresas = ["Empresa A", "Empresa B", "Empresa C"];
  const valores = [35000, 28000, 47000];
  const pacAtendido = [15, 8, 20];

  // --- Gráfico de Valores por Empresa ---
  const ctx1 = document.getElementById("graficoEmpresas");
  if (ctx1) {
    new Chart(ctx1.getContext("2d"), {
      type: "bar",
      data: {
        labels: empresas,
        datasets: [{
          label: "Valor Total (R$)",
          data: valores,
          backgroundColor: "#003366aa",
          borderColor: "#003366",
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // --- Gráfico PAC 2024 ---
  const ctx2 = document.getElementById("graficoPAC");
  if (ctx2) {
    new Chart(ctx2.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: empresas,
        datasets: [{
          label: "Atendido no PAC 2024",
          data: pacAtendido,
          backgroundColor: ["#0073e6", "#3399ff", "#66b3ff"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" }
        }
      }
    });
  }
}
