import React from "react";
import Sidebar from "@/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-background">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden bg-black">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
