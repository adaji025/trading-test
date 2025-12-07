"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

// Mock order book data
const sellOrders = [
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "3.1", qty: "0.0013" },
  { price: "120,784.33", amount: "2.65", qty: "0.0013" },
  { price: "120,784.33", amount: "2.65", qty: "0.0013" },
  { price: "120,784.33", amount: "1.27", qty: "0.0013" },
  { price: "120,784.33", amount: "1.27", qty: "0.0013" },
  { price: "120,784.33", amount: "3.003", qty: "0.0013" },
  { price: "120,784.33", amount: "3.003", qty: "0.0013" },
  { price: "120,784.33", amount: "0.000056", qty: "0.0013" },
  { price: "120,784.33", amount: "0.000056", qty: "0.0013" },
  { price: "120,784.33", amount: "2.01", qty: "0.0013" },
];

const buyOrders = [
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
  { price: "120,784.33", amount: "0.23", qty: "0.0013" },
];

export function OrderBookComponent() {
  return (
    <div className="w-full md:border-t bg-foreground h-full md:border-l border-[#2D3134] text-white">
      <Tabs defaultValue="orderbook" className="w-full py-[11px]">
        <TabsList className="hidden md:grid w-full grid-cols-2 rounded-none bg-foreground border-b border-gray-800 py-0">
          <TabsTrigger
            value="orderbook"
            className="text-white data-[state=active]:bg-transparent data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-400 rounded-none border-t-0 border-x-0 border-b-2 border-transparent"
          >
            <div className="py-">Order Book</div>
          </TabsTrigger>
          <TabsTrigger
            value="trades"
            className="text-white data-[state=active]:bg-transparent data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-400 rounded-none border-t-0 border-x-0 border-b-2 border-transparent"
          >
            Trades
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orderbook" className="mt-0">
          <div className="p-2 flex gap-2 md:gap-[unset] flex-row md:flex-col">
            {/* Order Book Header */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 mb-4 w-full text-xs text-gray-400 font-medium">
                <span>Price</span>
                <span className="text-center hidden md:inline">Amount</span>
                <span className="text-right">Qty</span>
              </div>

              {/* Sell Orders (Red) */}
              <div className="mb-4">
                {sellOrders.map((order, index) => {
                  // Stepped width pattern: first 2 biggest, then 3 smaller, then 2 smaller, then 4 smaller, last smallest
                  const getWidth = (idx: number) => {
                    if (idx < 2) return 90; // First 2: biggest
                    if (idx < 5) return 75; // Next 3: smaller
                    if (idx < 7) return 60; // Next 2: even smaller
                    if (idx < 11) return 55; // Next 4: smaller still
                    return 50; // Last 1: smallest
                  };

                  return (
                    <div
                      key={`sell-${index}`}
                      className="grid grid-cols-2 md:grid-cols-3 text-xs relative"
                    >
                      <span className="text-[#FF4D4F] relative z-10">
                        {order.price}
                      </span>
                      <span className="text-gray-300 text-center relative z-10 hidden md:inline">
                        {order.amount}
                      </span>
                      <span className="text-gray-300 text-right relative z-10 py-1">
                        {/* Background bar for visualization - only on Qty column */}
                        <div
                          className="absolute right-0 top-0 h-full bg-[#FF4D4F33]"
                          style={{ width: `${getWidth(index)}%` }}
                        />
                        <span className="relative z-10">{order.qty}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1">
              {/* Spread */}
              <div className="hidden md:flex justify-between items-center py-2 border-y border-gray-800 mb-4">
                <span className="text-gray-400 text-xs">Spread</span>
                <span className="text-gray-300 text-xs hidden md:inline">
                  1
                </span>
                <span className="text-gray-400 text-xs">0.00%</span>
              </div>

              {/* Buy Orders (Green) */}
              <div className="md:hidden grid grid-cols-2 md:grid-cols-3 mb-4 w-full text-xs text-gray-400 font-medium">
                <span>Price</span>
                <span className="text-center hidden md:inline">Amount</span>
                <span className="text-right">Qty</span>
              </div>
              <div className="">
                {buyOrders.map((order, index) => {
                  // Reversed stepped width pattern: last items biggest, first items smallest
                  const getWidth = (idx: number) => {
                    const totalItems = buyOrders.length;
                    const reversedIdx = totalItems - 1 - idx; // Reverse the index
                    if (reversedIdx < 2) return 90; // Last 2: biggest
                    if (reversedIdx < 5) return 75; // Next 3: smaller
                    if (reversedIdx < 7) return 60; // Next 2: even smaller
                    if (reversedIdx < 11) return 55; // Next 4: smaller still
                    return 50; // First 1: smallest
                  };

                  return (
                    <div
                      key={`buy-${index}`}
                      className="grid grid-cols-2 md:grid-cols-3 text-xs hover:bg-emerald-950/20 cursor-pointer relative"
                    >
                      <span className="text-emerald-400 relative z-10">
                        {order.price}
                      </span>
                      <span className="text-gray-300 text-center relative z-10 hidden md:inline">
                        {order.amount}
                      </span>
                      <span className="text-gray-300 text-right relative z-10 py-1">
                        {/* Background bar for visualization - only on Qty column */}
                        <div
                          className="absolute right-0 top-0 h-full bg-emerald-900/20"
                          style={{ width: `${getWidth(index)}%` }}
                        />
                        <span className="relative z-10">{order.qty}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="px-2 md:border-t border-gray-800">
            <div className="flex items-center justify-between">
              <Image
                src={"/value-map.svg"}
                height={12}
                width={44}
                alt="value map"
              />

              <div className="flex items-center space-x-2">
                <Select defaultValue="btc">
                  <SelectTrigger className="w-20 h-8 bg-transparent rounded-full border-gray-700 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="sol">SOL</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="1">
                  <SelectTrigger className="w-14 rounded-full h-8 bg-transparent border-gray-700 text-white text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white!">
                    <SelectItem value="1" className="text-white!">
                      1
                    </SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="trades" className="mt-0">
          <div className="p-2">
            {/* Trades Header */}
            <div className="grid grid-cols-3 w-full text-xs text-gray-400 font-medium mb-4">
              <span>Price</span>
              <span className="text-center">Size</span>
              <span className="text-right">Time</span>
            </div>

            {/* Recent Trades */}
            <div className="space-y-1">
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 text-xs py-1 hover:bg-gray-800/50 cursor-pointer"
                >
                  <span
                    className={
                      index % 2 === 0 ? "text-emerald-400" : "text-red-400"
                    }
                  >
                    120,784.33
                  </span>
                  <span className="text-gray-300 text-center">0.23</span>
                  <span className="text-gray-400 text-right">12:34:56</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
