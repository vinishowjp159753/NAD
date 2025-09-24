import { useState } from "react";

export default function Oficio() {
  const [destinatario, setDestinatario] = useState("");
  const [assunto, setAssunto] = useState("");
  const [texto, setTexto] = useState("");

  const gerarPDF = async () => {
    const res = await fetch("/api/gerar-pdf", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ destinatario, assunto, texto })
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `oficio-${Date.now()}.pdf`;
    a.click();
  };

  return (
    <main style={{maxWidth:600, margin:"40px auto"}}>
      <h1>Gerar Ofício</h1>
      <input placeholder="Destinatário" value={destinatario} onChange={e=>setDestinatario(e.target.value)} /><br/>
      <input placeholder="Assunto" value={assunto} onChange={e=>setAssunto(e.target.value)} /><br/>
      <textarea rows={6} placeholder="Texto do ofício" value={texto} onChange={e=>setTexto(e.target.value)} /><br/>
      <button onClick={gerarPDF}>Baixar PDF</button>
    </main>
  );
}