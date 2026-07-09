export function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div style={{ background: "white", borderRadius: 18, padding: 25, textAlign: "center" }}>
      <p style={{ color: "#64748b" }}>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}