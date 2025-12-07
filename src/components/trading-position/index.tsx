"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
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
  const [positionSize, setPositionSize] = React.useState([25]);
  const [tpSlEnabled, setTpSlEnabled] = React.useState(true);
  const [reduceOnly, setReduceOnly] = React.useState(false);

  return (
    <div className="w-full max-w-md bg-foreground text-white p-2 border border-gray-800">
      {/* Order Type Selectors */}
      <div className="flex space-x-2 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full text-xs hover:text-white/90 bg-transparent border-gray-700 text-white hover:bg-gray-700 flex-1"
            >
              {orderType}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
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
              className="rounded-full hover:text-white/90 bg-transparent border-gray-700 text-white hover:bg-gray-700 flex-1 text-xs"
            >
              {leverage}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
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
              className="rounded-full hover:text-white/90 bg-transparent text-xs border-gray-700 text-white hover:bg-gray-700 flex-1"
            >
              {limitType}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
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
      <div className="flex space-x-2 mb-6 py-1 px-2 rounded-full bg-gray-800">
        <Button
          className={`flex-1 rounded-full text-xs cursor-pointer hover:scale-105 transition-all duration-300 ${
            isLong
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-transparent hover:bg-transparent"
          }`}
          onClick={() => setIsLong(true)}
        >
          Long
        </Button>
        <Button
          className={`flex-1 rounded-full text-xs cursor-pointer hover:scale-105 transition-all duration-300 ${
            !isLong
              ? "bg-emerald-600 hover:bg-emerald-700"
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
        <div className="flex justify-between items-center mb-2 bg-[#1A1D1F] border-gray-700 rounded-md py-3 px-2">
          <label className="text-custom-light text-xs">Price</label>
          <span className="text-custom-light text-xs">USDC</span>
        </div>
        {/* Size Input */}
        <div className="flex justify-between items-center mb-2 bg-[#1A1D1F] border-gray-700 rounded-md py-3 px-2">
          <label className="text-custom-light text-xs">Size</label>
          <span className="text-custom-light text-xs">BTC</span>
        </div>

        <div className="flex justify-between items-center mb-2 bg-[#1A1D1F] border-gray-700 rounded-md py-3 px-2">
          <span className="text-custom-light text-xs">0.00</span>
          <span className="text-custom-light text-xs">USDC</span>
        </div>
      </div>

      {/* Position Size Slider */}
      <div className="my-6 px-2">
        <div className="flex items-center gap-4 justify-between mb-4">
          {/* <Slider
            value={positionSize}
            onValueChange={setPositionSize}
            max={100}
            step={25}
            className="flex-1 mr-4"
          /> */}

          <RangeSlider />
          <Badge variant="outline" className="border-gray-600 text-white">
            25%
          </Badge>
        </div>
      </div>

      {/* TP/SL and Reduce Only */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Switch
            checked={tpSlEnabled}
            onCheckedChange={setTpSlEnabled}
            className="data-[state=checked]:bg-emerald-600"
          />
          <span className="text-white text-xs">TP/SL</span>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={reduceOnly}
            onCheckedChange={setReduceOnly}
            className="data-[state=checked]:bg-emerald-600"
          />
          <span className="text-white text-xs">Reduce</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
            >
              GTC
              <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
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
        <div className="space-y-4 mb-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-400 text-xs">TP</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-xs">USDC</span>
                  <span className="text-gray-400 text-xs">Gain</span>
                  <span className="text-gray-400 text-xs">%</span>
                </div>
              </div>
              <Input
                type="number"
                placeholder="0.00"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-400 text-xs">SL</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-xs">USDC</span>
                  <span className="text-gray-400 text-xs">Loss</span>
                  <span className="text-gray-400 text-xs">%</span>
                </div>
              </div>
              <Input
                type="number"
                placeholder="0.00"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Connect Button */}
      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 mb-6">
        Connect
      </Button>

      {/* Position Summary */}
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Liq. Price</span>
          <span className="text-white">$2,455.43</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Est. Value</span>
          <span className="text-white">$2,455.43</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Margin</span>
          <span className="text-white">$2,455.43</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Fees</span>
          <span className="text-white">$2,455.43</span>
        </div>
      </div>
    </div>
  );
}
