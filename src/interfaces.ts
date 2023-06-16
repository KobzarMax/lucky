export interface RatingItem {
  place: number
  userId: string
  winChance: string
  totalWin: string
  winRounds: string
  totalRounds: string
  funds: string
  winStatus: string
  avatar: string
}

export interface Round {
  roundID: string
  status: string
  history: string
  choice: string
  yourPosition: string
  yourWin: string
  sum: string
  lastPrice: string
  price: string
  priseFond: string
  up: string
  down: string
}

export interface Referral {
  avatar: string
  bonus: string
  invited: string
}

export interface NewsItem {
  image: string
  title: string
  date: string
  text: string
}

export interface User {
  place: number
  userId: string
  winChance: string
  totalWin: string
  winRounds: string
  totalRounds: string
  funds: string
  winStatus: string
  avatar: string
}

export interface LatestGame {
  id: string
  funds: string
  percents: string
  status: string
}

export interface GameData {
  status: string
  lastPrice: string
  fixedPrice: string
  presentPool: string
  gameID: string
}

export interface PartnerPosibility {
  icon: string
  title: string
  text: string
}

export interface FAQItem {
  title: string
  text: string
}

export interface DescriptionItem {
  icon: string
  title: string
  text: string
}
