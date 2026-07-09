import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function MainLayout({
  children,
  currentPage,
  onChangePage,
}: {
  children: ReactNode;
  currentPage: string;
  onChangePage: (page: string) => void;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <Sidebar currentPage={currentPage} onChangePage={onChangePage} />

      <div style={{ flex: 1 }}>
        <Header title={currentPage} />
        <div style={{ padding: 30 }}>{children}</div>
      </div>
    </div>
  );
}