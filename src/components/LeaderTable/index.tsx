import { useTranslation } from 'react-i18next'
import avatar from '../../asset/avatar.png'
import styles from './index.module.css'
import React from "react";

interface LeaderTableProps {
  isMobile?: boolean
}

export const LeaderTable: React.FC<LeaderTableProps> = ({ isMobile }) => {
  const { t } = useTranslation(['translations'])

  const users = [
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

  return (
    <div>
      <div className="overflow-x-auto">
        {!isMobile && (
          <div className={`${styles['table-wrapper']} ${styles.tableWrapper}`}>
            <table className="relative w-full border-collapse">
              <thead>
                <tr>
                  <th className={styles.th}></th>
                  <th className={styles.thUser}>{t('user')}</th>
                  <th className={styles.th}>{t('totalWin')}</th>
                  <th className={styles.th}>{t('winChance')}</th>
                  <th className={styles.th}>{t('roundsWIn')}</th>
                  <th className={styles.th}>{t('playedRounds')}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className={`${user.winStatus}`}>
                    <td className={styles.userPlace}>#{user.place}</td>
                    <td className={styles.userAvatar}>
                      <img src={user.avatar} alt="user avatar" />
                      <span className={styles.userID}>{user.userId}</span>
                    </td>
                    <td className="pb-[15px] pr-[45px] pt-6">
                      <p className={styles.totalWin}>{user.totalWin}</p>
                      <p className="{styles.userFunds}">${user.funds}</p>
                    </td>
                    <td className={styles.winValue}>{user.winChance}</td>
                    <td className={styles.winValue}>{user.winRounds}</td>
                    <td className={styles.winValue}>{user.totalRounds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {isMobile && (
          <div className={styles['table-mobile-leaders']}>
            <div className={styles['table-wrapper']}>
              {users.map((user, index) => (
                <div
                  key={index}
                  className={`${user.winStatus} border-b border-dark_gray`}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className={styles.mobileUserPlace}>#{user.place}</div>
                    <div className="flex items-center justify-between">
                      <img src={user.avatar} alt="user avatar" />
                      <span className={styles.userID}>{user.userId}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className={styles.mobileWinCHance}>
                      {t('winChance')}
                    </div>
                    <div className={styles.winValue}>{user.winChance}</div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className={styles.mobileWinCHance}>
                      {t('totalWin')}
                    </div>
                    <div>
                      <p className={styles.totalWin}>{user.totalWin}</p>
                      <p className={styles.userFunds}>${user.funds}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className={styles.mobileWinCHance}>
                      {t('roundsWIn')}
                    </div>
                    <div className={styles.winValue}>
                      {user.winRounds}/{user.totalRounds}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
