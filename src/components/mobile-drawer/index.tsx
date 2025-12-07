"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Perps", href: "/perps", active: true },
    { label: "Spots", href: "/spots" },
    { label: "Portfolio", href: "/portfolio" },
  ];

  const marketItems = [
    { label: "Crypto Markets", href: "/markets/crypto" },
    { label: "Forex Markets", href: "/markets/forex" },
  ];

  const earnItems = [
    { label: "Staking", href: "/earn/staking" },
    { label: "Liquidity Mining", href: "/earn/liquidity" },
    { label: "Yield Farming", href: "/earn/yield" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:block xl:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-foreground border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:block xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pb-10">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-custom-light hover:text-white hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {/* Main Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={"#"}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                    item.active
                      ? "bg-gray-800 text-custom-emerald"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Markets Section */}
              <div className="pt-4 mt-4 border-t border-gray-800">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Markets
                </div>
                {marketItems.map((item) => (
                  <Link
                    key={item.href}
                    href={"#"}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Earn Section */}
              <div className="pt-4 mt-4 border-t border-gray-800">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Earn
                </div>
                {earnItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Image src={"/b.svg"} height={24} width={24} alt="b" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
