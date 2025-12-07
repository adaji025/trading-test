import { OrderBookComponent } from "@/components/order-book";
import TradingSummaryParent from "@/components/trading-summary";
import React from "react";

const OrderBook = () => {
  return (
    <div>
      <OrderBookComponent />
      <TradingSummaryParent />
    </div>
  );
};

export default OrderBook;
