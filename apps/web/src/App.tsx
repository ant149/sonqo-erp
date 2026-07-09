import { useState } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Clientes } from "./pages/Clientes";
import { Productos } from "./pages/Productos";
import { Cotizaciones } from "./pages/Cotizaciones";

function App() {
  const [page, setPage] = useState("Panel");

  return (
    <MainLayout currentPage={page} onChangePage={setPage}>
      {page === "Panel" && <Dashboard />}
      {page === "Clientes" && <Clientes />}
      {page === "Productos" && <Productos />}
      {page === "Cotizaciones" && <Cotizaciones />}
    </MainLayout>
  );
}

export default App;