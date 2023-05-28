import clock from '../../asset/Clock.svg'
import caret from '../../asset/CaretDown.svg'
import { useState } from 'react'

export const GameTimer = () => {
  const durations = [
    '1 minute',
    '5 minutes',
    '30 minutes',
    '1 hour',
    '2 hours',
    '4 hours'
  ]

  const [duration, setDuration] = useState(durations[0])

  const toggleDuration = (index) => {
    setDuration(durations[index])
  }

  return (
    <div className="game-durations z- relative">
      <div className="duration-picker flex cursor-pointer items-center justify-between gap-[33px] rounded-[15px] bg-[#2b2b2b99] py-[14px] pl-5 pr-4 transition-all duration-300 hover:bg-[#2b2b2bcc]">
        <p className="flex items-center justify-start gap-[5px] text-[15px] font-medium leading-[18px] text-[#BEBEBE]">
          <img src={clock} alt="clock" />
          {duration}
        </p>
        <img className="caret duration-300" src={caret} alt="caret" />
      </div>
      <div className="durations w-full p-4">
        <div className="durations-inner">
          {durations.map((dur, index) => (
            <p
              onClick={() => toggleDuration(index)}
              key={index}
              className={`duration-item ${
                duration === dur
                  ? 'selected pl-2.5 text-[15px] font-medium leading-[18px] text-white'
                  : 'text-[15px] font-medium leading-[18px] text-[#BEBEBE]'
              } mb-2.5 cursor-pointer`}
            >
              {dur}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
