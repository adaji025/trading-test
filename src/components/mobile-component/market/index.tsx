"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TradingChart } from "../../trading-chart";
import OrderBook from "./order-book";

const Market = () => {
  return (
    <div className="w-full bg-foreground text-white">
      <Tabs defaultValue="orderbook" className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-none bg-foreground border-b border-gray-800 py-0">
          <TabsTrigger
            value="chart"
            className="text-white data-[state=active]:bg-transparent data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-400 rounded-none border-t-0 border-x-0 border-b-2 border-transparent"
          >
            Chart
          </TabsTrigger>
          <TabsTrigger
            value="orderbook"
            className="text-white data-[state=active]:bg-transparent data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-400 rounded-none border-t-0 border-x-0 border-b-2 border-transparent"
          >
            Order Book
          </TabsTrigger>
          <TabsTrigger
            value="trades"
            className="text-white data-[state=active]:bg-transparent data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-400 rounded-none border-t-0 border-x-0 border-b-2 border-transparent"
          >
            Trades
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="mt-0">
          {/* <TradingChart /> */}
        </TabsContent>

        <TabsContent value="orderbook" className="mt-0">
          <OrderBook />
        </TabsContent>

        <TabsContent value="trades" className="mt-0">
          <div className="p-4">
            <p className="text-gray-400">Order Book content goes here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Market;
