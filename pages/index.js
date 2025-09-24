import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/oficio");
    } catch (err) {
      setErro("Usuário ou senha inválidos");
    }
  };

  return (
    <main style={{maxWidth:400, margin:"50px auto", textAlign:"center"}}>
      <h1>Login ESPEP NAD</h1>
      <form onSubmit={login}>
        <input placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Senha" value={senha} onChange={e=>setSenha(e.target.value)} /><br/>
        <button type="submit">Entrar</button>
      </form>
      {erro && <p style={{color:"red"}}>{erro}</p>}
    </main>
  );
}