async function carregarDados() {
    const response = await fetch('./data/compras.json');
    const dados = await response.json();

    const empresas = {};
    const pac = {sim: 0, nao: 0};

    dados.forEach(item => {
        empresas[item.EMPRESAS] = (empresas[item.EMPRESAS] || 0) + parseFloat(item['VALOR TOTAL']);
        if (item['ATENDIDO NO PAC 2024'].includes('NÃO')) pac.nao++; else pac.sim++;
    });

    console.log('Empresas:', empresas);
    console.log('PAC:', pac);
}
carregarDados();
