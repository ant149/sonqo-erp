export function Clientes() {
  return (
    <div>
      <h1>Clientes</h1>
      <p style={{ color: "#64748b" }}>Gestión de clientes SONQO.</p>

      <div style={{ background: "white", borderRadius: 16, padding: 24, marginTop: 20 }}>
        <button
          style={{
            background: "#0f172a",
            color: "white",
            padding: "12px 18px",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          + Nuevo cliente
        </button>

        <p style={{ marginTop: 20, color: "#64748b" }}>
          Aquí aparecerá la tabla de clientes.
        </p>
      </div>
    </div>
  );
}