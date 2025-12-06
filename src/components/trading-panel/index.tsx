"use client";

import * as React from "react";
import { ChevronDown, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for the ticker
const tickerData = [
  { symbol: "BTC", price: "120,785.4", change: "+1.81%" },
  { symbol: "ETH", price: "120,785.4", change: "+1.81%" },
  { symbol: "HYPE", price: "120,785.4", change: "+1.81%" },
];

export function TradingPanel() {
  return (
    <div className="flex-1 bg-foreground text-white min-h-[500px]">
      {/* Top Ticker Bar */}
      <div className="border-b border-gray-800 px-6 py-3">
        <div className="flex items-center space-x-8 text-[11px]">
          {tickerData.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded space-x-2 bg-[#1D1D1D] px-2 py-[2.5px] "
            >
              <span className="text-custom-emerald ">{item.change}</span>
              <span className="text-white ">{item.symbol}</span>
              <span className="text-white ">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Trading Interface */}
      <div className="px-6 py-2">
        {/* Trading Pair Header */}
        <div className="mb-6">
          {/* Trading Stats */}
          <div className="mt-4 flex  gap-8 text-xs">
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-gray-200 px-1"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">₿</span>
                      </div>
                      <span className="font-bold">BTC-USD</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700">
                  <DropdownMenuItem className="text-gray-300 text-xs">
                    ETH-USD
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 text-xs">
                    SOL-USD
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-300 text-xs">
                    ADA-USD
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <div className="text-[#A9A9A9] underline">Mark / Oracle</div>
              <div className="text-white font-medium">3,699.0 / 3,700.6</div>
            </div>
            <div>
              <div className="text-[#A9A9A9] underline">24h Change</div>
              <div className="text-emerald-400 font-medium">
                +2,129.7 +1.81%
              </div>
            </div>
            <div>
              <div className="text-[#A9A9A9] underline">24h Volume</div>
              <div className="text-white font-medium">$3,503,919,357.29</div>
            </div>
            <div>
              <div className="text-[#A9A9A9] underline">Open Interest</div>
              <div className="text-white font-medium">$2.03T</div>
            </div>
            <div>
              <div className="text-[#A9A9A9] underline">Funding/Countdown</div>
              <div className="text-white font-medium">0.0013% / 1:34</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
