import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Usuário padrão para teste
  const USUARIO_PADRAO = {
    email: "teste@espep.pb.gov.br",
    senha: "Senha123!"
  };

  const login = (e) => {
    e.preventDefault();

    if (email === USUARIO_PADRAO.email && senha === USUARIO_PADRAO.senha) {
      alert("Login bem-sucedido!");
      window.location.href = "/oficio"; // Redireciona para a página do formulário
    } else {
      setErro("Usuário ou senha inválidos");
    }
  };

  return (
    <main style={{maxWidth:400, margin:"50px auto", textAlign:"center"}}>
      <h1>Login ESPEP NAD</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br/><br/>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          required
        /><br/><br/>
        <button type="submit">Entrar</button>
      </form>
      {erro && <p style={{color:"red"}}>{erro}</p>}
      <p>Para teste: teste@espep.pb.gov.br / Senha123!</p>
    </main>
  );
}
