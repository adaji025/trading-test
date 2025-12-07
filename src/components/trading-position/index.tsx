"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RangeSlider } from "../range-slider";

export function TradingPositionComponent() {
  const [orderType, setOrderType] = React.useState("Cross");
  const [leverage, setLeverage] = React.useState("5x");
  const [limitType, setLimitType] = React.useState("Limit");
  const [isLong, setIsLong] = React.useState(true);
  const [tpSlEnabled] = React.useState(true);
  const [price, setPrice] = React.useState("");
  const [size, setSize] = React.useState("");
  const [tp, setTp] = React.useState("0.00");
  const [sliderValue, setSliderValue] = React.useState(25);

  // Helper function to allow only numbers and decimal point
  const handleNumericInput = (value: string, setter: (value: string) => void) => {
    // Allow only numbers, decimal point, and empty string
    const numericValue = value.replace(/[^0-9.]/g, "");
    // Prevent multiple decimal points
    const parts = numericValue.split(".");
    if (parts.length > 2) {
      setter(parts[0] + "." + parts.slice(1).join(""));
    } else {
      setter(numericValue);
    }
  };

  return (
    <div className="w-full h-full border-t bg-foreground text-white p-2 border-r border-l border-[#2D3134]">
      {/* Order Type Selectors */}
      <div className="flex space-x-1 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full w-fit text-xs hover:text-white/90 bg-transparent border-[#2D3134] text-white hover:bg-gray-700"
            >
              {orderType}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-[#2D3134]">
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setOrderType("Cross")}
            >
              Cross
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setOrderType("Isolated")}
            >
              Isolated
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full hover:text-white/90 bg-transparent border-[#2D3134] text-white hover:bg-gray-700 text-xs"
            >
              {leverage}
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-[#2D3134]">
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLeverage("1x")}
            >
              1x
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLeverage("5x")}
            >
              5x
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLeverage("10x")}
            >
              10x
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLeverage("20x")}
            >
              20x
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full hover:text-white/90 bg-transparent text-xs border-[#2D3134] text-white hover:bg-gray-700 flex-1"
            >
              {limitType}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-[#2D3134]">
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLimitType("Market")}
            >
              Market
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLimitType("Limit")}
            >
              Limit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700 text-xs"
              onClick={() => setLimitType("Stop")}
            >
              Stop
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Long/Short Toggle */}
      <div className="flex space-x-2 mb-6 py-1 px-2 rounded-full bg-[#1A1D1F]">
        <Button
          className={`flex-1 rounded-full text-xs cursor-pointer hover:scale-105 transition-all duration-300 ${isLong
              ? "bg-custom-emerald hover:bg-emerald-700"
              : "bg-transparent hover:bg-transparent"
            }`}
          onClick={() => setIsLong(true)}
        >
          Long
        </Button>
        <Button
          className={`flex-1 rounded-full text-xs cursor-pointer hover:scale-105 transition-all duration-300 ${!isLong
              ? "bg-custom-emerald hover:bg-emerald-700"
              : "bg-transparent hover:bg-transparent"
            } text-white`}
          onClick={() => setIsLong(false)}
        >
          Short
        </Button>
      </div>

      {/* Available Balance */}
      <div className="flex justify-between items-center mb-2 text-xs">
        <span className="text-custom-light text-xs">Available</span>
        <span className="text-white text-xs">2,455.43 USDC</span>
      </div>

      <div className="flex justify-between items-center mb-6 text-xs">
        <span className="text-custom-light">Current Position</span>
        <span className="text-white">2,455.43 USDC</span>
      </div>

      <div className="space-y-1">
        {/* Price Input */}
        <div className="flex justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              value={price}
              onChange={(e) => handleNumericInput(e.target.value, setPrice)}
              placeholder="Price"
              className="bg-transparent text-white text-xs outline-none flex-1"
            />
            <span className="text-custom-light text-xs">USDC</span>
          </div>
        </div>
        {/* Size Input */}
        <div className="flex justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              value={size}
              onChange={(e) => handleNumericInput(e.target.value, setSize)}
              placeholder="Size"
              className="bg-transparent text-white text-xs outline-none flex-1"
            />
            <span className="text-custom-light text-xs">BTC</span>
          </div>
        </div>
        {/* Tp input */}
        <div className="flex justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
          <div className="flex items-center gap-2 flex-1">
            <input
              type="text"
              value={tp}
              onChange={(e) => handleNumericInput(e.target.value, setTp)}
              placeholder="0.00"
              className="bg-transparent text-white text-xs outline-none flex-1"
            />
            <span className="text-custom-light text-xs">USDC</span>
          </div>
        </div>
      </div>

      {/* Position Size Slider */}
      <div className="my-6 px-2 flex items-center gap-4 justify-between mb-4">
        <RangeSlider value={sliderValue} onChange={setSliderValue} />
        <Badge
          variant="outline"
          className="border-gray-600 font-normal text-xs text-white px-2"
        >
          {sliderValue} %
        </Badge>
      </div>

      {/* TP/SL and Reduce Only */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-full bg-custom-emerald flex items-center justify-center">
            <Check className="w-3 h-3 text-foreground" />
          </div>
          <span className="text-white text-xs">TP/SL</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex w-3 h-3 border border-white rounded-full"></div>
          <span className="text-white text-xs">Reduce</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              // size="sm"
              className="bg-transparent text-xs rounded-full border-[#2D3134] text-white hover:bg-gray-200"
            >
              GTC
              <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-[#2D3134]">
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              GTC
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              IOC
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700">
              FOK
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* TP/SL Inputs */}
      {tpSlEnabled && (
        <div className="space-y-1 mb-6">
          <div className="flex-1">
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-1 justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
                <label className="text-custom-light text-xs">TP</label>
                <span className="text-custom-light text-xs">USDC</span>
              </div>
              <div className="flex w-2/6 justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
                <span className="text-custom-light text-xs">Gain</span>
                <span className="text-custom-light text-xs">%</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-2 justify-between items-center mb-2">
              <div className="flex flex-1 justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
                <label className="text-custom-light text-xs">SL</label>
                <span className="text-custom-light text-xs">USDC</span>
              </div>
              <div className="flex w-2/6 justify-between items-center mb-2 bg-[#1A1D1F] border-[#2D3134] rounded-md py-3 px-2">
                <span className="text-custom-light text-xs">Loss</span>
                <span className="text-custom-light text-xs">%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connect Button */}
      <Button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-foreground cursor-pointer font-semibold py-3 mb-6">
        Connect
      </Button>

      {/* Position Summary */}
      <div className="space-y-2 text-xs border rounded-2xl p-3 border-[#1A1D1F]">
        <div className="flex justify-between">
          <span className="text-custom-light">Liq. Price</span>
          <span className="text-white">$2,455.43</span>
        </div>
        <div className="flex justify-between">
          <span className="text-custom-light">Est. Value</span>
          <span className="text-white">$2,455.43</span>
        </div>
        <div className="flex justify-between">
          <span className="text-custom-light">Margin</span>
          <span className="text-white">$2,455.43</span>
        </div>
        <div className="flex justify-between">
          <span className="text-custom-light">Fees</span>
          <span className="text-white">$2,455.43</span>
        </div>
      </div>
    </div>
  );
}
