import {FaWallet} from 'react-icons/fa6'

function Balance() {
  return (
    <div className="bg-[#9a9fae] m-1 p-5 font-bold text-[2rem] flex items-center gap-3 cursor-pointer rounded">
      <FaWallet className='text-[#101f28]' /> <span> $0.00</span>
    </div>
  )
}

export default Balance
