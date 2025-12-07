"use client";

import type React from "react";

import { useState, useRef, useEffect, useCallback } from "react";

interface RangeSliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

export function RangeSlider({ value, onChange }: RangeSliderProps) {
  const [internalValue, setInternalValue] = useState(value ?? 25);
  const [isDragging, setIsDragging] = useState(false);
  const [dragValue, setDragValue] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalValue;
  // Use dragValue during dragging for smooth visual feedback, otherwise use currentValue
  const displayValue = isDragging && dragValue !== null ? dragValue : currentValue;

  // Calculate positions for markers
  const markers = [0, 25, 50, 75, 100];

  // Update internal value when prop changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const updateValueFromEvent = useCallback((e: MouseEvent | React.MouseEvent<HTMLDivElement>, snap: boolean = false) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    if (snap) {
      // Snap to nearest marker
      const snappedValue = markers.reduce((prev, curr) => 
        Math.abs(curr - percentage) < Math.abs(prev - percentage) ? curr : prev
      );

      if (onChange) {
        onChange(snappedValue);
      } else {
        setInternalValue(snappedValue);
      }
      setDragValue(null);
    } else {
      // During dragging, show smooth value and update parent in real-time
      const roundedValue = Math.round(percentage);
      setDragValue(percentage);
      // Update parent component in real-time during drag
      if (onChange) {
        onChange(roundedValue);
      } else {
        setInternalValue(roundedValue);
      }
    }
  }, [onChange]);

  const handleHandleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDragValue(displayValue);
  };

  const handleTrackMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('slider-track')) {
      setIsDragging(true);
      updateValueFromEvent(e, true);
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      updateValueFromEvent(e, false);
    }
  }, [isDragging, updateValueFromEvent]);

  const handleMouseUp = useCallback(() => {
    if (isDragging && dragValue !== null) {
      // Snap to nearest marker on release
      const snappedValue = markers.reduce((prev, curr) => 
        Math.abs(curr - dragValue) < Math.abs(prev - dragValue) ? curr : prev
      );

      if (onChange) {
        onChange(snappedValue);
      } else {
        setInternalValue(snappedValue);
      }
      setDragValue(null);
    }
    setIsDragging(false);
  }, [isDragging, dragValue, onChange]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleMarkerClick = (marker: number) => {
    if (onChange) {
      onChange(marker);
    } else {
      setInternalValue(marker);
    }
    setDragValue(null);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative h-12 rounded-lg flex items-center cursor-pointer"
        onMouseDown={handleTrackMouseDown}
      >
        {/* Track background */}
        <div className="absolute inset-0 flex items-center slider-track">
          <div className="w-full h-0.5 bg-[#878787] rounded-full" />
        </div>

        {/* Filled track - Active portion with green background */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div
            className="h-0.5 bg-custom-emerald rounded-full transition-all duration-150"
            style={{
              width: `${displayValue}%`,
              left: `0%`,
            }}
          />
        </div>

        {/* Draggable Handle */}
        <div
          ref={handleRef}
          onMouseDown={handleHandleMouseDown}
          className={`absolute rounded-full transform -translate-x-1/2 cursor-grab active:cursor-grabbing z-10 transition-all ${
            isDragging ? "scale-110" : "scale-100"
          }`}
          style={{
            left: `${displayValue}%`,
            width: "12px",
            height: "12px",
            backgroundColor: "#10b981",
            border: "2px solid #1F1F1FCC",
            boxShadow: isDragging ? "0 0 8px rgba(16, 185, 129, 0.5)" : "none",
          }}
        />

        {/* Markers/Nodes */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          {markers.map((marker) => {
            const isActive = marker <= displayValue;
            const isAtMarker = Math.abs(marker - displayValue) < 2; // Hide marker if handle is on it
            
            return (
              <div
                key={marker}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMarkerClick(marker);
                }}
                className={`absolute rounded-full transform -translate-x-1/2 cursor-pointer transition-all pointer-events-auto ${
                  isAtMarker
                    ? "opacity-0"
                    : isActive
                    ? "w-2 h-2 bg-custom-emerald"
                    : "w-2 h-2 bg-foreground border-2 border-custom-emerald"
                }`}
                style={{
                  left: `${marker}%`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
