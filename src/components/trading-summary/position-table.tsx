"use client"

interface Position {
  coin: string
  size: string
  positionValue: string
  entryPrice: string
  markPrice: string
  pnl: string
  liqPrice: string
  margin: string
  funding: string
}

const columns = [
  { key: "coin", label: "Coin" },
  { key: "size", label: "Size" },
  { key: "positionValue", label: "Position Value" },
  { key: "entryPrice", label: "Entry Price" },
  { key: "markPrice", label: "Mark Price" },
  { key: "pnl", label: "PNL (ROE %)" },
  { key: "liqPrice", label: "Liq. Price" },
  { key: "margin", label: "Margin" },
  { key: "funding", label: "Funding" },
]

export default function PositionsTable({
  hideSmallBalances,
}: {
  hideSmallBalances: boolean
}) {
  // Mock empty state for now
  const positions: Position[] = []

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#2D3134] text-custom-light text-xs font-medium">
            {columns.map((column) => (
              <th key={column.key} className="px-6 text-nowrap py-4 text-left font-medium text-slate-300">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {positions.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center">
                <div className="text-slate-500 text-sm">No positions yet</div>
              </td>
            </tr>
          ) : (
            positions.map((position, index) => (
              <tr key={index} className="border-b text-nowrap border-slate-800 hover:bg-slate-900/30 transition-colors">
                <td className="px-6 text-nowrap! py-4 text-sm font-medium text-slate-100">{position.coin}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.size}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.positionValue}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.entryPrice}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.markPrice}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.pnl}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.liqPrice}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.margin}</td>
                <td className="px-6 text-nowrap! py-4 text-sm text-slate-300">{position.funding}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
