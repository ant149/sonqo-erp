const menu = ["Panel", "Clientes", "Productos", "Cotizaciones"];

export function Sidebar({
  currentPage,
  onChangePage,
}: {
  currentPage: string;
  onChangePage: (page: string) => void;
}) {
  return (
    <aside style={{ width: 260, background: "#0f172a", color: "white", padding: 30 }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>SONQO</h1>

      {menu.map((item) => (
        <div
          key={item}
          onClick={() => onChangePage(item)}
          style={{
            padding: 16,
            borderRadius: 12,
            marginBottom: 12,
            cursor: "pointer",
            background: currentPage === item ? "#1e293b" : "transparent",
            fontWeight: currentPage === item ? "bold" : "normal",
          }}
        >
          {item}
        </div>
      ))}
    </aside>
  );
}