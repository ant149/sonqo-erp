import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: 30 }}>{children}</div>
      </div>
    </div>
  );
}