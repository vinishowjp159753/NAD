import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function loadData() {
      const snap = await getDocs(collection(db, "teste"));
      setDocs(snap.docs.map(d => d.data()));
    }
    loadData();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Portal NAD/ESPEP</h1>
      <ul>
        {docs.map((d, i) => (
          <li key={i}>{JSON.stringify(d)}</li>
        ))}
      </ul>
    </main>
  );
}
