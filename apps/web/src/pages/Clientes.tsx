import { useState } from "react";

type Cliente = {
  id: number;
  ruc: string;
  nombre: string;
  telefono: string;
  ciudad: string;
};

export function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([
    {
      id: 1,
      ruc: "20612918504",
      nombre: "IMPORTACIONES YERANY S.A.C.",
      telefono: "999638020",
      ciudad: "Lima",
    },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [form, setForm] = useState({
    ruc: "",
    nombre: "",
    telefono: "",
    ciudad: "",
  });

  const clientesFiltrados = clientes.filter((cliente) =>
    `${cliente.ruc} ${cliente.nombre} ${cliente.telefono} ${cliente.ciudad}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  function agregarCliente() {
    if (!form.ruc || !form.nombre) return;

    setClientes([
      ...clientes,
      {
        id: Date.now(),
        ruc: form.ruc,
        nombre: form.nombre,
        telefono: form.telefono,
        ciudad: form.ciudad,
      },
    ]);

    setForm({ ruc: "", nombre: "", telefono: "", ciudad: "" });
  }

  function eliminarCliente(id: number) {
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  }

  return (
    <div>
      <h1>Clientes</h1>
      <p style={{ color: "#64748b" }}>Gestión de clientes SONQO.</p>

      <div style={{ background: "white", padding: 24, borderRadius: 16, marginTop: 20 }}>
        <h2>Nuevo cliente</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          <input placeholder="RUC / DNI" value={form.ruc} onChange={(e) => setForm({ ...form, ruc: e.target.value })} />
          <input placeholder="Nombre o Razón Social" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
          <input placeholder="Teléfono" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
          <input placeholder="Ciudad" value={form.ciudad} onChange={(e) => setForm({ ...form, ciudad: e.target.value })} />
        </div>

        <button onClick={agregarCliente} style={{ marginTop: 15, background: "#0f172a", color: "white", padding: "12px 18px", border: "none", borderRadius: 10 }}>
          + Agregar cliente
        </button>
      </div>

      <div style={{ background: "white", padding: 24, borderRadius: 16, marginTop: 20 }}>
        <input
          placeholder="Buscar cliente..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ width: "100%", padding: 12, marginBottom: 20 }}
        />

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>RUC/DNI</th>
              <th>Cliente</th>
              <th>Teléfono</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.ruc}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.ciudad}</td>
                <td>
                  <button onClick={() => eliminarCliente(cliente.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}