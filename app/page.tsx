// //20250119 UPDATED CHG FOR V1
"use client";

import React, { useState } from "react";
import PortfolioNavbar from "./src/components/Navbar";
import PlotCard from "./src/components/PlotCard";
import App from "./src/components/HomeAccordion";

const tabs = [
  { id: 0, name: "About", endpoint: "/about" },
  { id: 1, name: "Efficient Frontier", endpoint: "/efficient-frontier" },
  { id: 2, name: "Portfolio Allocation", endpoint: "/portfolio-allocation" },
  { id: 3, name: "Asset Scatter Plot", endpoint: "/scatter-plot" },
  { id: 4, name: "Ledoit-Wolf Matrix", endpoint: "/ledoit-wolf" },
  { id: 5, name: "Expected Returns", endpoint: "/expected-returns" },
  { id: 6, name: "Minimizing Variance", endpoint: "/minimizing-variance" },
  { id: 7, name: "Discrete Allocation", endpoint: "/discrete-allocation" }, // Match Navbar
];

export default function PortfolioPage() {
  const [currentTab, setCurrentTab] = useState<number | null>(null);

  const renderContent = () => {
    if (currentTab === null || currentTab === 0) {
      return <App />;
    }

    const selectedTab = tabs.find((tab) => tab.id === currentTab);
    if (selectedTab) {
      return <PlotCard name={selectedTab.name} endpoint={selectedTab.endpoint} />;
    }

    return <p className="text-center text-error">Invalid Selection</p>;
  };

  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <PortfolioNavbar onSelect={setCurrentTab} />
      <div className="flex-grow p-6 max-w-5xl mx-auto">{renderContent()}</div>
    </div>
  );
}
