"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import PositionsTable from "./position-table"

const tabs = [
  { id: "balances", label: "Balances" },
  { id: "position", label: "Position (0)" },
  { id: "orders", label: "Open Orders (0)" },
  { id: "twap", label: "TWAP (0)" },
  { id: "trailing", label: "Trailing (0)" },
  { id: "trade-history", label: "Trade History" },
  { id: "funding-history", label: "Funding History" },
  { id: "order-history", label: "Order History" },
]

export default function TradingSummaryParent() {
  const [activeTab, setActiveTab] = useState("balances")
  const [hideSmallBalances, setHideSmallBalances] = useState(false)

  return (
    <div className="min-h-[200px] text-slate-100 md:border-t border-[#2D3134]">
      {/* Header */}
      <div className="border-b border-[#2D3134]">
        <div className="px-2">
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-xs whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-custom-emerald text-white"
                      : "border-transparent text-custom-light hover:text-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="hidden md:flex items-center gap-4 ml-8">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-xs rounded-full border border-slate-600 hover:border-slate-500 hover:bg-slate-800 transition-colors flex items-center gap-2">
                  Filter <ChevronDown size={16} />
                </button>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={hideSmallBalances}
                  onChange={(e) => setHideSmallBalances(e.target.checked)}
                  className="sr-only"
                  aria-label="Hide small balances"
                />
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center ${
                    hideSmallBalances
                      ? "bg-emerald-400 border-emerald-400"
                      : "border-white"
                  }`}
                >
                  {hideSmallBalances && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-xs">Hide small balances</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="">
        {activeTab === "balances" && <PositionsTable hideSmallBalances={hideSmallBalances} />}
        {activeTab !== "balances" && (
          <div className="text-custom-light text-sm py-8 px-2 md:text-center">{tabs.find((t) => t.id === activeTab)?.label} tab content</div>
        )}
      </div>
    </div>
  )
}
