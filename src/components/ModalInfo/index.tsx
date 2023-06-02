import { useEffect } from 'react'
import { CountDown } from 'components/Countdown'
import { useTranslation } from 'react-i18next'
import 'flowbite'
import twitter from 'asset/TwitterLogo.svg'
import telegram from 'asset/TelegramLogo.svg'
import discord from 'asset/DiscordLogo.svg'

export const ModalInfo = () => {
  const { t } = useTranslation(['home'])

  return (
    <div
      id="popup-modal"
      tabindex="-1"
      className="fixed backdrop-blur-sm  top-0 left-0 right-0 z-50 hidden p-2 sm:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-[#1A1B1F] rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-6 text-center">
            <h1 className="text-white text-[20px] mb-[20px]">Game starts in</h1>
            <CountDown />
            <p className="text-white my-[20px] text-[20px]">Stay tuned!</p>
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
