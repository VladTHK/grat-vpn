import { ArrowDown, ArrowUp } from "lucide-react"
import { boughtServer } from "./model/boughtserver"

const BoughtServer = () => {
  return (
    <article className="flex justify-between items-center border border-b-2 border-slate-700 bg-slate-900 mx-5 my-4 px-4 py-3 rounded-xl shadow-md text-white">
      <div className="w-full">
        <h2 className="text-lg font-bold font-mono mb-1">Your VPN</h2>
        <ul className="w-full">
          {boughtServer.map((server) => (
            <li key={server.id}
              className="flex flex-col gap-2 shadow-md shadow-black/50 border border-b-2 border-slate-700 bg-slate-800 w-full rounded-lg px-4 py-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-end">
                  <h3 className="font-mono font-bold">{server.title}</h3>
                  <span className="text-xs text-slate-500">{server.ip}</span>
                </div>
                  <span className="bg-green-500 px-2 py-1 rounded-lg font-bold font-mono text-xs">{server.status}</span>
              </div>
              <div className="flex gap-4 text-slate-200">
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
                <button className="flex-1 main-button border border-b-2 border-sky-600">Ping</button>
                <button className="flex-1 main-button border border-b-2 border-sky-600">Update</button>
                <button className="flex-1/12 secondary-button border border-b-2 border-sky-800">Edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default BoughtServer