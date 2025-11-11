carregarDados().then(dados => {
  // Top 5 empresas
  const sorted = [...dados].sort((a,b) => b['VALOR TOTAL'] - a['VALOR TOTAL']).slice(0,5);
  const ctx1 = document.getElementById('chartEmpresas').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: sorted.map(d => d.EMPRESAS),
      datasets: [{
        label: 'Valor Total (R$)',
        data: sorted.map(d => d['VALOR TOTAL']),
        backgroundColor: '#004a91'
      }]
    }
  });

  // Distribuição por Objeto
  const objetoSoma = {};
  dados.forEach(d => {
    const obj = d['OBJETO DO CONTRATO'];
    objetoSoma[obj] = (objetoSoma[obj] || 0) + d['VALOR TOTAL'];
  });
  const ctx2 = document.getElementById('chartObjetos').getContext('2d');
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: Object.keys(objetoSoma),
      datasets: [{
        data: Object.values(objetoSoma),
        backgroundColor: ['#004a91','#007bff','#66a6ff','#a3c9ff','#dceeff']
      }]
    }
  });

  // PAC 2024
  const atendido = dados.filter(d => d['ATENDIDO NO PAC 2024'].toUpperCase().includes('PAC')).length;
  const nao = dados.length - atendido;
  const ctx3 = document.getElementById('chartPac').getContext('2d');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Atendido', 'Não Atendido'],
      datasets: [{
        data: [atendido, nao],
        backgroundColor: ['#004a91','#ccc']
      }]
    }
  });
});
