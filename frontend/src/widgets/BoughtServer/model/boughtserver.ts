interface IBoughtServer {
  id: string
  title: string
  status: "online" | "offline"
  ip: string
  inputSpeed: string
  outputSpeed: string
  packetLose: string 
}

export const boughtServer: IBoughtServer[] = [
  {
    id: "1",
    title: "Germany",
    status: "online",
    ip: "123.222.01.228",
    inputSpeed: "191.1",
    outputSpeed: "30",
    packetLose: "0"
  },
  {
    id: "1",
    title: "Germany",
    status: "offline",
    ip: "123.222.01.228",
    inputSpeed: "191.1",
    outputSpeed: "30",
    packetLose: "0"
  },
]
