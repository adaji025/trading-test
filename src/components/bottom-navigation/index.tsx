"use client";

import * as React from "react";
import { MarketTabIcon, PortfolioTabIcon, TradeTabIcon } from "../svg";

interface IProps {
  activeTab: "market" | "trade" | "portfolio";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"market" | "trade" | "portfolio">
  >;
}
export function BottomNavigation({ activeTab, setActiveTab }: IProps) {
  const navItems: Array<{
    id: "market" | "trade" | "portfolio";
    label: string;
    icon: React.ReactNode;
    href: string;
  }> = [
    {
      id: "market",
      label: "Market",
      icon: <MarketTabIcon />,
      href: "/",
    },
    {
      id: "trade",
      label: "Trade",
      icon: <TradeTabIcon />,
      href: "/trade",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <PortfolioTabIcon />,
      href: "/portfolio",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 block md:hidden bg-foreground border-t border-gray-800 z-50">
      <div className="flex items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center justify-center gap-1 px-4 py-2 rounded-full transition-colors ${
                isActive ? "bg-gray-800" : ""
              }`}
            >
              <div
                className={`w-5 h-5 ${
                  isActive ? "text-custom-emerald" : "text-custom-light"
                }`}
              >
                {item.icon}
              </div>

              <span
                className={`text-xs font-medium ${
                  isActive ? "text-custom-emerald" : "text-custom-light"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
