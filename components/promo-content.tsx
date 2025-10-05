/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, currentDate.getMonth(), 1);
  const lastDay = new Date(year, currentDate.getMonth() + 1, 0);

  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  if (variant === "mobile") {
    return (
      <div className={cn("p-3 border-t border-border bg-muted/20", className)}>
        <div className="flex justify-between items-center mb-2">
          <button onClick={prevMonth} className="text-sm text-primary">
            ←
          </button>
          <h2 className="text-sm font-medium">
            {month} {year}
          </h2>
          <button onClick={nextMonth} className="text-sm text-primary">
            →
          </button>
        </div>

        <div className="grid grid-cols-7 text-center text-xs font-medium mb-1">
          {daysOfWeek.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day, idx) =>
            day ? (
              <div
                key={idx}
                className={cn(
                  "p-2 rounded text-xs cursor-pointer transition",
                  isToday(day)
                    ? "bg-primary text-white font-semibold"
                    : "bg-card hover:bg-primary/10 text-foreground"
                )}
              >
                {day}
              </div>
            ) : (
              <div key={idx}></div>
            )
          )}
        </div>
      </div>
    );
  }

  // Desktop Calendar
  return (
    <div className={cn("border border-border rounded-lg p-4 bg-card", className)}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-lg font-semibold">
          ←
        </button>
        <h2 className="text-lg font-semibold">
          {month} {year}
        </h2>
        <button onClick={nextMonth} className="text-lg font-semibold">
          →
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-medium text-muted-foreground mb-2">
        {daysOfWeek.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className={cn(
                "p-3 rounded-md text-sm cursor-pointer transition",
                isToday(day)
                  ? "bg-primary text-white font-semibold shadow"
                  : "bg-muted hover:bg-primary/20 text-foreground"
              )}
            >
              {day}
            </div>
          ) : (
            <div key={idx}></div>
          )
        )}
      </div>
    </div>
  );
}
