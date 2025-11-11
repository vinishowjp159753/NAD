async function carregarDados() {
  const response = await fetch('data/compras.json');
  const dados = await response.json();
  return dados;
}
