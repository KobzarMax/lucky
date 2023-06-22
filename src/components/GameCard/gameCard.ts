export interface GameCardProps {
  cardData: GameData
  toggleShow: () => void
}

export interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export interface GameData {
  status: string
  lastPrice: string
  fixedPrice: string
  presentPool: string
  gameID: string
}
