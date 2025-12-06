import { Header } from "@/components/header";
import { OrderBookComponent } from "@/components/order-book";
import { TradingPanel } from "@/components/trading-panel";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex-1 flex">
          <TradingPanel />
          <div className="w-[25%]">
            <OrderBookComponent />
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    </>
  );
}
