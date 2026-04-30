"use client";

import { useAppStore } from "@/store/appStore";

export default function TestPage() {
  const { count, increment, decrement, reset } = useAppStore();

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif", gap: "1rem" }}>
      <h1>✅ Tela de Teste</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", border: "1px solid #ccc", borderRadius: "8px", padding: "1.5rem 2rem" }}>
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{count}</span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={decrement} style={{ padding: "0.4rem 1rem", fontSize: "1rem", background: "#0070f3", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>−</button>
          <button onClick={increment} style={{ padding: "0.4rem 1rem", fontSize: "1rem", background: "#0070f3", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>+</button>
          <button onClick={reset} style={{ padding: "0.4rem 1rem", fontSize: "1rem", background: "#eee", color: "#333", border: "none", borderRadius: "6px", cursor: "pointer" }}>reset</button>
        </div>
      </div>
    </main>
  );
}