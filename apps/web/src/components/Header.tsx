export function Header() {
  return (
    <header style={{ height: 80, background: "white", padding: "0 35px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <p style={{ margin: 0, color: "#64748b" }}>Bienvenido a SONQO ERP</p>
      </div>
      <strong>Administrador</strong>
    </header>
  );
}