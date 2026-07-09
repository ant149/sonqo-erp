import { StatCard } from "../components/StatCard";

export function Dashboard() {
  return (
    <section style={{ padding: 35 }}>
      <h1 style={{ textAlign: "center" }}>Resumen general</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
        <StatCard title="Ventas del día" value="S/ 4,520" />
        <StatCard title="Cotizaciones" value="18" />
        <StatCard title="Producción" value="21" />
        <StatCard title="Clientes" value="587" />
      </div>
    </section>
  );
}