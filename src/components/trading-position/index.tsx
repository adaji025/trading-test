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

export function TradingPositionComponent() {
  const [orderType, setOrderType] = React.useState("Cross");
  const [leverage, setLeverage] = React.useState("5x");
  const [limitType, setLimitType] = React.useState("Limit");
  const [isLong, setIsLong] = React.useState(true);
  const [positionSize, setPositionSize] = React.useState([25]);
  const [tpSlEnabled, setTpSlEnabled] = React.useState(true);
  const [reduceOnly, setReduceOnly] = React.useState(false);

  return (
    <div className="w-full max-w-md bg-gray-950 text-white p-2 border border-gray-800">
      {/* Order Type Selectors */}
      <div className="flex space-x-2 mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 flex-1"
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
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 flex-1 text-xs"
            >
              {leverage}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
              onClick={() => setLeverage("1x")}
            >
              1x
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
              onClick={() => setLeverage("5x")}
            >
              5x
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
              onClick={() => setLeverage("10x")}
            >
              10x
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
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
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 flex-1"
            >
              {limitType}
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-800 border-gray-700">
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
              onClick={() => setLimitType("Market")}
            >
              Market
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
              onClick={() => setLimitType("Limit")}
            >
              Limit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-gray-300 hover:bg-gray-700"
              onClick={() => setLimitType("Stop")}
            >
              Stop
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Long/Short Toggle */}
      <div className="flex space-x-2 mb-6">
        <Button
          className={`flex-1 ${
            isLong
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-gray-800 hover:bg-gray-700"
          } text-white`}
          onClick={() => setIsLong(true)}
        >
          Long
        </Button>
        <Button
          className={`flex-1 ${
            !isLong
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-800 hover:bg-gray-700"
          } text-white`}
          onClick={() => setIsLong(false)}
        >
          Short
        </Button>
      </div>

      {/* Available Balance */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm">Available</span>
        <span className="text-white text-sm">2,455.43 USDC</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-400 text-sm">Current Position</span>
        <span className="text-white text-sm">2,455.43 USDC</span>
      </div>

      {/* Price Input */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-400 text-sm">Price</label>
          <span className="text-gray-400 text-sm">USDC</span>
        </div>
        <Input
          type="number"
          placeholder="0.00"
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
        />
      </div>

      {/* Size Input */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-400 text-sm">Size</label>
          <span className="text-gray-400 text-sm">BTC</span>
        </div>
        <Input
          type="number"
          placeholder="0.00"
          defaultValue="0.00"
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-400 text-sm">0.00</span>
          <span className="text-gray-400 text-sm">USDC</span>
        </div>
      </div>

      {/* Position Size Slider */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Slider
            value={positionSize}
            onValueChange={setPositionSize}
            max={100}
            step={25}
            className="flex-1 mr-4"
          />
          <Badge variant="outline" className="border-gray-600 text-white">
            {positionSize[0]}%
          </Badge>
        </div>

        {/* Slider markers */}
        <div className="flex justify-between text-xs text-gray-500 mb-4">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
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
          <span className="text-white text-sm">TP/SL</span>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={reduceOnly}
            onCheckedChange={setReduceOnly}
            className="data-[state=checked]:bg-emerald-600"
          />
          <span className="text-white text-sm">Reduce</span>
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
                <label className="text-gray-400 text-sm">TP</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">USDC</span>
                  <span className="text-gray-400 text-sm">Gain</span>
                  <span className="text-gray-400 text-sm">%</span>
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
                <label className="text-gray-400 text-sm">SL</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">USDC</span>
                  <span className="text-gray-400 text-sm">Loss</span>
                  <span className="text-gray-400 text-sm">%</span>
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
      <div className="space-y-2 text-sm">
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
