import { ArrowDown, ArrowUp, Gauge, RotateCcw } from "lucide-react"
import { boughtServer } from "./model/boughtserver"

const BoughtServer = () => {
  return (
    <article className="flex justify-between items-center border border-b-2 border-gray-700 bg-gray-900 mx-5 my-4 px-4 py-3 rounded-xl shadow-md text-white">
      <div className="w-full">
        <h2 className="text-lg font-bold font-mono mb-1">Your VPN</h2>
        <ul className="w-full flex gap-2 flex-col">
          {boughtServer.map((server) => (
            <li key={server.id}
              className="flex flex-col gap-2 shadow-md shadow-black/50 border border-b-2 border-gray-700 bg-gray-800 w-full rounded-lg px-4 py-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-end">
                  <h3 className="font-mono font-bold">{server.title}</h3>
                  <span className="text-xs text-gray-500">{server.ip}</span>
                </div>
                  <span className={`${server.status == "online" ? "bg-green-500/50  border-green-500 text-green-400" : "bg-rose-500/50  border-rose-500 text-rose-400" } ${" gap-0.5 flex border px-2 py-1 rounded-lg font-bold font-mono text-xs"}`}><span className="animate-pulse">•</span> {server.status}</span>
              </div>
              <div className="flex gap-4 text-gray-200">
                <div className="flex items-center gap ">
                  <ArrowUp size={20} color="currentColor"/>
                  <span className="font-mono">{server.outputSpeed} GB</span>
                </div>
                <div className="flex items-center gap">
                  <ArrowDown size={20} color="currentColor"/>
                  <span className="font-mono">{server.inputSpeed} GB</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 button flex items-center justify-center gap-1"><Gauge size={18}/>Ping</button>
                <button className="flex-1 button flex items-center justify-center gap-1"><RotateCcw size={18}/>Update</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default BoughtServer