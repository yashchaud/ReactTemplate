import React from "react";
import Sidebar from "@/Dashboard/Sidebar";
import { TableComponent } from "@/Dashboard/AddComponents/components";

const Dashboard = () => {
  return (
    <div className="flex bg-background w-[100vw] h-[100vh]">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden bg-black">
        <TableComponent />
      </main>
    </div>
  );
};

export default Dashboard;
