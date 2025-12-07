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
    <div className="min-h-[200px] text-slate-100 md:border-t border-slate-700">
      {/* Header */}
      <div className="border-b border-slate-700">
        <div className="px-2">
          <div className="flex items-center justify-between">
            {/* Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs whitespace-nowrap border-b-2 transition-all ${
                    activeTab === tab.id
                      ? "border-cyan-400 text-cyan-400"
                      : "border-transparent text-slate-400 hover:text-slate-300"
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
                  className="w-4 h-4 accent-cyan- text-xs"
                />
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
          <div className="text-slate-400 text-sm py-8 px-2 md:text-center">{tabs.find((t) => t.id === activeTab)?.label} tab content</div>
        )}
      </div>
    </div>
  )
}
