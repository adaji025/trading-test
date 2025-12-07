"use client";

import * as React from "react";
import { BarChart3, TrendingUp, User } from "lucide-react";
import Link from "next/link";

export function BottomNavigation() {
  const [activeTab, setActiveTab] = React.useState("market");

  const navItems = [
    {
      id: "market",
      label: "Market",
      icon: TrendingUp,
      href: "/",
    },
    {
      id: "trade",
      label: "Trade",
      icon: BarChart3,
      href: "/trade",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: User,
      href: "/portfolio",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 block md:hidden bg-foreground border-t border-gray-800 z-50">
      <div className="flex items-center justify-around px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-colors ${
                isActive ? "bg-gray-800" : ""
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-custom-emerald" : "text-gray-400"
                }`}
              />
              <span
                className={`text-xs mt-1 font-medium ${
                  isActive ? "text-custom-emerald" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
