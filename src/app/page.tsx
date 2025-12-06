import { Header } from "@/components/header";
import { OrderBookComponent } from "@/components/order-book";
import { TradingPanel } from "@/components/trading-panel";
import { TradingPositionComponent } from "@/components/trading-position";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex-1 flex">
          <TradingPanel />
          <div className="max-w-[288px] w-full">
            <OrderBookComponent />
          </div>
        </div>
        <div className="max-w-[288px] w-full">
          <TradingPositionComponent />
        </div>
      </div>
    </>
  );
}
