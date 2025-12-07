"use client";

import { ArrowLeftRight } from "lucide-react";

export function AccountEquityComponent() {
  return (
    <div className="w-full text-white border-t px-2 border-l border-gray-700">
      {/* Top Navigation */}
      <div className="text-white w-fit xl:w-full text-xs text-center bg-[#1A1D1F] rounded-full mt-2 hover:bg-gray-700 px-2 py-2">
        Deposit
      </div>
      <div className="flex mt-2 items-center gap-2 justify-end xl:justify-between border-gray-800">
        <div className="flex px-2 py-2 justify-center bg-[#1A1D1F] rounded-full xl:flex-1 items-center space-x-2">
          <div className="text-custom-emerald  text-xs">Perps</div>
          <ArrowLeftRight className="w-4 h-4 text-custom-light" />
          <div className="text-custom-light text-xs">Spot</div>
        </div>

        <div className="xl:flex-1 text-xs text-custom-light bg-[#1A1D1F] text-center p-2 rounded-full hover:bg-gray-700">
          Withdraw
        </div>
      </div>

      {/* Account Equity Section */}
      <div className="mt-4">
        <h2 className="text-xs font-semibold text-white mb-2">
          Account Equity
        </h2>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <div className="text-custom-light">Spot</div>
            <div className="text-white font-bold">$2,455.43</div>
          </div>
          <div className="flex justify-between text-xs">
            <div className="text-custom-light">Perps</div>
            <div className="text-white font-bold">$2,455.43</div>
          </div>
        </div>

        {/* Perps Overview Section */}
        <div className="mb-2 mt-4">
          <h3 className="text-xs font-semibold text-white mb-2">
            Perps Overview
          </h3>

          <div className="grid grid-cols-1 gap-1 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-custom-light">Balance</span>
              <span className="text-white font-medium">$2,455.43</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-custom-light">Unrealized PnL</span>
              <span className="text-white font-medium">$2,455.43</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-custom-light">Cross Margin Ratio</span>
              <span className="text-white font-medium">$2,455.43</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-custom-light">Maintenance Margin</span>
              <span className="text-white font-medium">$2,455.43</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-custom-light">Cross Account Leverage</span>
              <span className="text-white font-medium">$2,455.43</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
