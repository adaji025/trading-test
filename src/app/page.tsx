"use client";
import React from "react";
import { AccountEquityComponent } from "@/components/account-equity";
import { BottomNavigation } from "@/components/bottom-navigation";
import { Header } from "@/components/header";
import Market from "@/components/mobile-component/market";
import { OrderBookComponent } from "@/components/order-book";
import { TradingChart } from "@/components/trading-chart";
import { TradingPositionComponent } from "@/components/trading-position";
import TradingSummaryParent from "@/components/trading-summary";

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<
    "market" | "trade" | "portfolio"
  >("market");
  return (
    <>
      <Header />
      {/* large screens */}
      <div className="pb-20 md:pb-20 xl:pb-0 hidden md:block">
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1 flex">
            <TradingChart />
            <div className="max-w-[288px] w-full hidden xl:block">
              <OrderBookComponent />
            </div>
          </div>
          <div className="xl:max-w-[288px] w-full">
            <div className="flex">
              <div className="xl:hidden flex-1">
                <OrderBookComponent />
              </div>
              <div className="flex-1">
                <TradingPositionComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1 order-2 xl:order-1">
            <TradingSummaryParent />
          </div>
          <div className="xl:w-[288px] w-full order-1 xl:order-2">
            <AccountEquityComponent />
          </div>
        </div>
      </div>

      {/* medium to small screen */}
      <div className="md:hidden">
        <TradingChart />
        <div className="md:hidden">{activeTab === "market" && <Market />}</div>
        <div className="md:hidden">
          {activeTab === "trade" && <TradingPositionComponent />}
        </div>
        <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}
