"use client";

import type React from "react";

import { useState, useRef } from "react";

export function RangeSlider() {
  const [minValue, setMinValue] = useState(25);
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
          <div className="w-full h-1 bg-slate-700 rounded-full" />
        </div>

        {/* Filled track */}
        <div
          className="absolute"
          style={{
            left: `${minValue}%`,
            right: `${100 - maxValue}%`,
          }}
        />

        {/* Markers/Nodes */}
        <div className="absolute inset-0 flex items-center">
          {markers.map((marker) => (
            <div
              key={marker}
              className="absolute w-2.5 h-2.5 bg-white rounded-full transform -translate-x-1/2"
              style={{
                left: `${marker}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
