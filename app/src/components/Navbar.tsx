// //20250119 UPDATED CHG FOR V1
"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Divider,
} from "@heroui/react";
import { Icon } from "@iconify/react";

const tabs = [
  { id: 0, label: "About" },
  { id: 1, label: "Efficient Frontier" },
  { id: 2, label: "Portfolio Allocation" },
  { id: 3, label: "Asset Scatter Plot" },
  { id: 4, label: "Ledoit-Wolf Matrix" },
  { id: 5, label: "Expected Returns" },
  { id: 6, label: "Minimizing Variance" },
  { id: 7, label: "Discrete Allocation" }, // Ensure correct indexing here
];

export default function PortfolioNavbar({
  onSelect,
}: {
  onSelect: (id: number) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-gradient-to-r from-purple-600 to-blue-500 shadow-md",
        wrapper: "w-full justify-between items-center px-4",
      }}
      height="60px"
    >
      <NavbarBrand className="mr-8">
        <div className="rounded-full bg-foreground text-background p-2"></div>
        <span className="ml-2 text-white text-lg font-medium">
          Decure Labs PyPortfolioOpt Demo
        </span>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex space-x-6">
        {tabs.map((tab) => (
          <NavbarItem key={tab.id}>
            <button
              className="text-white hover:text-gray-200"
              onClick={() => onSelect(tab.id)}
            >
              {tab.label}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <button
        className="flex items-center justify-center p-2 rounded-md md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Icon
          icon={isMenuOpen ? "mdi:close" : "mynaui:panel-right-open-solid"}
          width={24}
          className={isMenuOpen ? "text-purple-600" : "text-blue-700"}
        />
      </button>

      {isMenuOpen && (
        <NavbarMenu className="absolute top-[calc(var(--navbar-height)_-_1px)] w-full bg-white shadow-md rounded-md z-50 py-4 px-6">
          {tabs.map((tab) => (
            <NavbarMenuItem key={tab.id}>
              <button
                className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md w-full text-left"
                onClick={() => {
                  onSelect(tab.id);
                  setIsMenuOpen(false);
                }}
              >
                {tab.label}
              </button>
              {tab.id < tabs.length - 1 && <Divider className="opacity-50" />}
            </NavbarMenuItem>
          ))}
          <Divider className="my-4" />
          <Button
              className="w-full text-center text-white bg-purple-600 hover:bg-purple-700"
              radius="full"
              onClick={() => window.location.href = "https://pyportfolioopt.readthedocs.io/en/latest/UserGuide.html"}
            >
              Learn More
          </Button>
        </NavbarMenu>
      )}
    </Navbar>
  );
}
