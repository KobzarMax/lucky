import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styles from './LeaderTable.module.css'
import React from 'react'
import { LeaderTableProps } from './leaderTable'
import { users } from './leaderTableConsts'

export const LeaderTable: React.FC<LeaderTableProps> = ({ isMobile }) => {
  const { t } = useTranslation(['translations'])

  const tableWrapperClass = classNames(
    styles['table-wrapper'],
    styles.tableWrapper
  )
  const thClass = styles.th
  const thUserClass = styles.thUser
  const thClassTotalWin = styles.th
  const thClassWinChance = styles.th
  const thClassRoundsWin = styles.th
  const thClassPlayedRounds = styles.th
  const userPlaceClass = styles.userPlace
  const userAvatarClass = styles.userAvatar
  const userIDClass = styles.userID
  const totalClass = styles.total
  const totalWinClass = styles.totalWin
  const userFundsClass = styles.userFunds
  const winValueClass = styles.winValue
  const mobileUserPlaceClass = styles.mobileUserPlace
  const mobileWinCHanceClass = styles.mobileWinCHance

  return (
    <div>
      <div className="overflow-x-auto">
        {!isMobile && (
          <div className={tableWrapperClass}>
            <table className="relative w-full border-collapse">
              <thead>
                <tr>
                  <th className={thClass}></th>
                  <th className={thUserClass}>{t('user')}</th>
                  <th className={thClassTotalWin}>{t('totalWin')}</th>
                  <th className={thClassWinChance}>{t('winChance')}</th>
                  <th className={thClassRoundsWin}>{t('roundsWIn')}</th>
                  <th className={thClassPlayedRounds}>{t('playedRounds')}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className={styles[user.winStatus]}>
                    <td className={userPlaceClass}>#{user.place}</td>
                    <td className={userAvatarClass}>
                      <img src={user.avatar} alt="user avatar" />
                      <span className={userIDClass}>{user.userId}</span>
                    </td>
                    <td className="pb-[15px] pr-[45px] pt-6">
                      <p className={`${totalClass} ${totalWinClass}`}>
                        {user.totalWin}
                      </p>
                      <p className={userFundsClass}>${user.funds}</p>
                    </td>
                    <td className={winValueClass}>{user.winChance}</td>
                    <td className={winValueClass}>{user.winRounds}</td>
                    <td className={winValueClass}>{user.totalRounds}</td>
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
                  className={classNames(
                    styles[user.winStatus],
                    'border-dark_gray border-b'
                  )}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className={mobileUserPlaceClass}>#{user.place}</div>
                    <div className="flex items-center justify-between">
                      <img src={user.avatar} alt="user avatar" />
                      <span className={userIDClass}>{user.userId}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className={mobileWinCHanceClass}>{t('winChance')}</div>
                    <div className={winValueClass}>{user.winChance}</div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className={mobileWinCHanceClass}>{t('totalWin')}</div>
                    <div>
                      <p className={`${totalClass} ${totalWinClass}`}>
                        {user.totalWin}
                      </p>
                      <p className={userFundsClass}>${user.funds}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className={mobileWinCHanceClass}>{t('roundsWIn')}</div>
                    <div className={winValueClass}>
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
