const menu = ["Dashboard", "Clientes", "Productos", "Cotizaciones"];

export function Sidebar() {
  return (
    <aside style={{ width: 260, background: "#0f172a", color: "white", padding: 30 }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>SONQO</h1>
      {menu.map((item, index) => (
        <div key={item} style={{ padding: 16, borderRadius: 12, marginBottom: 12, background: index === 0 ? "#1e293b" : "transparent" }}>
          {item}
        </div>
      ))}
    </aside>
  );
}