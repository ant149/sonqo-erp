function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", fontFamily: "Arial" }}>
      <aside style={{ width: 260, background: "#0f172a", color: "white", padding: 30 }}>
        <h1 style={{ textAlign: "center", marginBottom: 40 }}>SONQO</h1>

        {["Dashboard", "Clientes", "Productos", "Cotizaciones", "Producción", "Reportes", "Configuración"].map(
          (item, index) => (
            <div
              key={item}
              style={{
                padding: 16,
                borderRadius: 12,
                marginBottom: 12,
                background: index === 0 ? "#1e293b" : "transparent",
                fontWeight: index === 0 ? "bold" : "normal",
              }}
            >
              {item}
            </div>
          )
        )}
      </aside>

      <main style={{ flex: 1, background: "#f8fafc" }}>
        <header style={{ height: 80, background: "white", padding: "0 35px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ margin: 0 }}>Dashboard</h2>
            <p style={{ margin: 0, color: "#64748b" }}>Bienvenido a SONQO ERP</p>
          </div>
          <strong>Administrador</strong>
        </header>

        <section style={{ padding: 35 }}>
          <h1 style={{ textAlign: "center" }}>Resumen general</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {[
              ["Ventas del día", "S/ 4,520"],
              ["Cotizaciones", "18"],
              ["Producción", "21"],
              ["Clientes", "587"],
            ].map(([title, value]) => (
              <div key={title} style={{ background: "white", borderRadius: 18, padding: 25, textAlign: "center" }}>
                <p style={{ color: "#64748b" }}>{title}</p>
                <h2>{value}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;