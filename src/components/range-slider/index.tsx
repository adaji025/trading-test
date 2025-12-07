"use client";

import type React from "react";

import { useState, useRef } from "react";

export function RangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(75);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate positions for markers
  const markers = [0, 25, 50, 75, 100];

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative h-12 rounded-lg flex items-center"
      >
        {/* Track background */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-0.5 bg-[#878787] rounded-full" />
        </div>

        {/* Filled track - Active portion with green background */}
        <div className="absolute inset-0 flex items-center">
          <div
            className="h-0.5 bg-custom-emerald rounded-full"
            style={{
              width: `${25}%`,
              left: `${minValue}%`,
            }}
          />
        </div>

        {/* Markers/Nodes */}
        <div className="absolute inset-0 flex items-center">
          {markers.map((marker) => {
            const activeValue = 25; // The active range is from 0 to this value
            const isActive = marker <= activeValue;
            const isActiveBoundary = marker === activeValue;
            
            return (
              <div
                key={marker}
                className={`absolute rounded-full transform -translate-x-1/2 ${
                  isActiveBoundary
                    ? "w-3 h-3"
                    : "w-2 h-2"
                } ${
                  isActive
                    ? "bg-custom-emerald"
                    : "bg-foreground border-2 border-custom-emerald"
                }`}
                style={{
                  left: `${marker}%`,
                  ...(isActiveBoundary && {
                    border: "2px solid #1F1F1FCC",
                  }),
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
