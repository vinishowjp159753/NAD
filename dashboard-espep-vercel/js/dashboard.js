async function carregarDados() {
  const response = await fetch('./data/compras.json');
  const dados = await response.json();

  const empresas = {};
  const pac = { sim: 0, nao: 0 };

  dados.forEach(item => {
    empresas[item.EMPRESAS] = (empresas[item.EMPRESAS] || 0) + parseFloat(item['VALOR TOTAL']);
    if (item['ATENDIDO NO PAC 2024'].includes('NÃO')) pac.nao++;
    else pac.sim++;
  });

  // Gráfico de valores por empresa
  const ctx1 = document.getElementById('graficoEmpresas').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: Object.keys(empresas),
      datasets: [{
        label: 'Valor Total (R$)',
        data: Object.values(empresas),
        borderWidth: 1,
        backgroundColor: '#004c91'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Valores por Empresa' }
      }
    }
  });

  // Gráfico PAC 2024
  const ctx2 = document.getElementById('graficoPac').getContext('2d');
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Atendido no PAC', 'Não Consta no PAC'],
      datasets: [{
        data: [pac.sim, pac.nao],
        backgroundColor: ['#007bff', '#ccc']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: 'Situação no PAC 2024' }
      }
    }
  });
}

carregarDados();
