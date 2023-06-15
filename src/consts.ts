import avatar from '@/asset/big-avatar.png'
import banner1 from '@/asset/banner1.png'
import banner2 from '@/asset/banner2.png'
import banner3 from '@/asset/banner3.png'
import transparency from '@/asset/transparency.svg'
import safety from '@/asset/safety.svg'
import oportunity from '@/asset/oportunity.svg'
import rewards from '@/asset/rewards.svg'
import createAccount from '@/asset/UserCirclePlus.svg'
import wallet from '@/asset/wallet.svg'
import coins from '@/asset/coins.svg'
import {
  GameData,
  Round,
  NewsItem,
  RatingItem,
  User,
  LatestGame,
  Referral
} from '@/interfaces'
export {
  avatar,
  banner1,
  banner2,
  banner3,
  transparency,
  safety,
  oportunity,
  rewards,
  createAccount,
  wallet,
  coins
}

export const rating: RatingItem[] = [
  {
    place: 1,
    userId: '139812hud12j',
    winChance: '51.87%',
    totalWin: '62,571107',
    winRounds: '11 041',
    totalRounds: '21 287',
    funds: '120,78',
    winStatus: 'negative',
    avatar: avatar
  },
  {
    place: 2,
    userId: '139812hud12j',
    winChance: '59.23%',
    totalWin: '10 617,047296',
    winRounds: '10 576',
    totalRounds: '17 856',
    funds: '20 491,57',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 3,
    userId: '139812hud12j',
    winChance: '60.49%',
    totalWin: '3 050,363175',
    winRounds: '7 617',
    totalRounds: '12 592',
    funds: '5 886,97',
    winStatus: 'positive',
    avatar: avatar
  }
]

export const rounds: Round[] = [
  {
    roundID: '150,123',
    status: 'now',
    history: 'win',
    choice: 'down',
    yourPosition: '0.0090 BNB',
    yourWin: '+0.0058 BNB',
    sum: '0.0148 BNB',
    lastPrice: '$317.4411',
    price: '$317.2409',
    priseFond: '11.3535 BNB',
    up: '1.69x Payout | 6.7194 BNB',
    down: '2.45x Payout | 4.6360 BNB'
  },
  {
    roundID: '150,123',
    status: 'now',
    history: 'win',
    choice: 'down',
    yourPosition: '0.0090 BNB',
    yourWin: '+0.0058 BNB',
    sum: '0.0148 BNB',
    lastPrice: '$317.4411',
    price: '$317.2409',
    priseFond: '11.3535 BNB',
    up: '1.69x Payout | 6.7194 BNB',
    down: '2.45x Payout | 4.6360 BNB'
  },
  {
    roundID: '150,123',
    status: 'now',
    history: 'lose',
    choice: 'down',
    yourPosition: '0.0090 BNB',
    yourWin: '+0.0058 BNB',
    sum: '0.0148 BNB',
    lastPrice: '$317.4411',
    price: '$317.2409',
    priseFond: '11.3535 BNB',
    up: '1.69x Payout | 6.7194 BNB',
    down: '2.45x Payout | 4.6360 BNB'
  }
]

export const referals: Referral[] = [
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  },
  {
    avatar: avatar,
    bonus: '12',
    invited: '13.05.2023'
  }
]

export const news: NewsItem[] = [
  {
    image: banner1,

    title: 'The game starts soon',
    date: '02.06.2023',
    text: '🎮🔮 Exciting news! Lucky Hamster, the ultimate blockchain prediction game, is launching soon! Get ready to showcase your skills and win big! 🚀 #LuckyHamster #BlockchainGame'
  },
  {
    image: banner2,

    title: 'How does this game work?',
    date: '02.06.2023',
    text: '🔮🐹 Predict market moves, earn rewards! Lucky Hamster, the innovative blockchain prediction game, puts your skills to the test. Start playing now! 🚀 #LuckyHamster #BlockchainGame'
  },
  {
    image: banner3,

    title: 'Take your profit now',
    date: '02.06.2023',
    text: '🤑💰 Play, predict, profit! Join Lucky Hamster, the blockchain prediction game, and turn your foresight into earnings. Get started now! 🚀 #LuckyHamster #BlockchainGame'
  }
]

export const users: User[] = [
  {
    place: 1,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 2,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 3,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 4,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 5,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 6,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 7,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 8,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 9,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 10,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  },
  {
    place: 11,
    userId: '139812hud12j',
    winChance: '60,15%',
    totalWin: '2 336,731979',
    winRounds: '7 519',
    totalRounds: '12 501',
    funds: '4 512, 78',
    winStatus: 'positive',
    avatar: avatar
  }
]

export const latestGames: LatestGame[] = [
  {
    id: '0x139812hud1',
    funds: '$132',
    percents: '336%',
    status: 'up'
  },
  {
    id: '0x7b1a99db99',
    funds: '$512',
    percents: '387%',
    status: 'down'
  },
  {
    id: '0x24564c36f8',
    funds: '$48.379',
    percents: '298%',
    status: 'up'
  },
  {
    id: '0xdf40a43ea0',
    funds: '$726',
    percents: '153%',
    status: 'down'
  },
  {
    id: '0xa54b95de9a',
    funds: '$972',
    percents: '213%',
    status: 'up'
  },
  {
    id: '0xe19c41c8de',
    funds: '$395',
    percents: '157%',
    status: 'down'
  },
  {
    id: '0x671827faff',
    funds: '$70',
    percents: '300%',
    status: 'up'
  },
  {
    id: '0x8f992d12a4',
    funds: '$490',
    percents: '276%',
    status: 'down'
  },
  {
    id: '0x690ad5d477',
    funds: '$586',
    percents: '243%',
    status: 'down'
  },
  {
    id: '0x6d57e05cc2',
    funds: '$33',
    percents: '105%',
    status: 'down'
  },
  {
    id: '0x48ff68216f',
    funds: '$885',
    percents: '356%',
    status: 'up'
  },
  {
    id: '0x7b8bece2d0',
    funds: '$664',
    percents: '32%',
    status: 'down'
  },
  {
    id: '0xdeca0a29b7',
    funds: '$285',
    percents: '376%',
    status: 'up'
  },
  {
    id: '0x51f8e7e3b1',
    funds: '$828',
    percents: '337%',
    status: 'down'
  },
  {
    id: '0xf7a8f9634c',
    funds: '$109',
    percents: '353%',
    status: 'up'
  },
  {
    id: '0x5866ea8257',
    funds: '$482',
    percents: '242%',
    status: 'down'
  },
  {
    id: '0xbea24e1448',
    funds: '$233',
    percents: '331%',
    status: 'up'
  },
  {
    id: '0x536d52dd5d',
    funds: '$55',
    percents: '299%',
    status: 'down'
  },
  {
    id: '0x980a15d00a',
    funds: '$78',
    percents: '349%',
    status: 'down'
  },
  {
    id: '0x62075a9e2',
    funds: '$201',
    percents: '374%',
    status: 'down'
  }
]

export const durations: string[] = [
  '1 minute',
  '5 minutes',
  '30 minutes',
  '1 hour',
  '2 hours',
  '4 hours'
]

export const games: GameData[] = [
  {
    status: 'ended',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '4.9641',
    gameID: '#91999'
  },
  {
    status: 'active',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '4.9641',
    gameID: '#92002'
  },
  {
    status: 'togo',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '0.0001',
    gameID: '#92001'
  },
  {
    status: 'ended',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '4.9641',
    gameID: '#91999'
  },
  {
    status: 'active',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '4.9641',
    gameID: '#92002'
  },
  {
    status: 'togo',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '0.0001',
    gameID: '#92001'
  },
  {
    status: 'togo',
    lastPrice: '$1.8848',
    fixedPrice: '$1.8905',
    presentPool: '0.0001',
    gameID: '#92001'
  }
]
