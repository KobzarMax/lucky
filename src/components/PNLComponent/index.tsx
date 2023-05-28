export const PNLComponent = () => {
  return (
    <div className="mt-[108px]">
      <div className="flex items-center justify-start gap-[15px]">
        <div className="border-t-dark_green border-r-dark_green border-b-primary border-l-primary  flex h-20 w-20 rotate-45 items-center justify-center rounded-full border-[5px]">
          <div className="flex -rotate-45 flex-col items-center justify-center">
            <p className="text-xs font-semibold leading-[15px] text-white">
              Won
            </p>
            <p className="text-[15px] font-semibold leading-[18px] text-white">
              74/150
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">49.33%</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold leading-[15px] text-[#797979]">
            Not results
          </p>
          <p className="text-primary text-[15px] font-semibold leading-[18px]">
            -0.1270 BNB
          </p>
          <p className="text-[10px] leading-3 text-[#797979]">-$38.75</p>
        </div>
      </div>
      <div className="mb-2.5 mt-[30px]">
        <p className="text-xs font-semibold leading-[15px] text-[#797979]">
          Average return / round
        </p>
        <p className="text-primary text-[15px] font-semibold leading-[18px]">
          -0.0008 BNB
        </p>
        <p className="text-[10px] leading-3 text-[#797979]">-0.26</p>
      </div>
      <div className="mb-2.5">
        <p className="text-xs font-semibold leading-[15px] text-[#797979]">
          Best round: #166178
        </p>
        <p className="text-dark_green text-[15px] font-semibold leading-[18px]">
          +0.0191 BNB{' '}
          <span className="text-[10px] leading-3 text-[#797979]">(3.49x)</span>
        </p>
        <p className="text-[10px] leading-3 text-[#797979]">$5.83</p>
      </div>
      <div className="mb-[15px] border-b border-[#363636] pb-[15px]">
        <p className="text-xs font-semibold leading-[15px] text-[#797979]">
          Average position entered / round
        </p>
        <p className="text-[15px] font-semibold leading-[18px] text-white">
          0.00053 BNB
        </p>
        <p className="text-[10px] leading-3 text-[#797979]">1.62</p>
      </div>
      <div>
        <p className="mb-2.5 text-xs font-semibold leading-[15px] text-[#797979]">
          Won
        </p>
        <div className="mb-2.5 flex items-center justify-start gap-[60px]">
          <div>
            <p className="text-dark_green mb-[3px] text-[15px] font-semibold leading-[18px]">
              74 rounds
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">49.33%</p>
          </div>
          <div>
            <p className="text-dark_green mb-[3px] text-[15px] font-semibold leading-[18px]">
              +0.3220 BNB
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">$98.30</p>
          </div>
        </div>
        <p className="mb-2.5 text-xs font-semibold leading-[15px] text-[#797979]">
          Lost
        </p>
        <div className="flex items-center justify-start gap-[60px]">
          <div>
            <p className="text-primary mb-[3px] text-[15px] font-semibold leading-[18px]">
              76 rounds
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">49.33%</p>
          </div>
          <div>
            <p className="text-primary mb-[3px] text-[15px] font-semibold leading-[18px]">
              -0.4490 BNB
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">$98.30</p>
          </div>
        </div>
      </div>
    </div>
  )
}
