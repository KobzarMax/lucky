import { useEffect } from 'react'
import { CountDown } from '../../components/Countdown'
import { useTranslation } from 'react-i18next'
import 'flowbite'
import twitter from '../../asset/TwitterLogo.svg'
import telegram from '../../asset/TelegramLogo.svg'
import discord from '../../asset/DiscordLogo.svg'

export const ModalInfo = () => {
  const { t } = useTranslation(['home'])

  return (
    <div
      id="popup-modal"
      tabIndex={1}
      className="fixed inset-x-0  top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden p-2 backdrop-blur-sm sm:p-4 md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-md">
        <div className="relative rounded-lg bg-[#1A1B1F] shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-6 text-center">
            <h1 className="mb-[20px] text-[20px] text-white">Game starts in</h1>
            <CountDown />
            <p className="my-[20px] text-[20px] text-white">Stay tuned!</p>
            <div className="social-links flex items-center justify-center gap-[15px]">
              <a
                href="#"
                className="flex h-[25px] w-[25px] items-center justify-center"
              >
                <img
                  className="h-[25px] w-[25px]"
                  src={twitter}
                  alt="twitter link"
                />
              </a>
              <a
                href="#"
                className="flex h-[25px] w-[25px] items-center justify-center"
              >
                <img
                  className="h-[25px] w-[25px]"
                  src={telegram}
                  alt="telegram link"
                />
              </a>
              <a
                href="#"
                className="flex h-[25px] w-[25px] items-center justify-center"
              >
                <img
                  className="h-[25px] w-[25px]"
                  src={discord}
                  alt="discord link"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
