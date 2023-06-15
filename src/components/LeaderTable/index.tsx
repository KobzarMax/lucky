import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import React from 'react'
import { users } from '@/consts'

interface LeaderTableProps {
  isMobile?: boolean
}

export const LeaderTable: React.FC<LeaderTableProps> = ({ isMobile }) => {
  const { t } = useTranslation(['translations'])

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
