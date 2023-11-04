import {FaWallet} from 'react-icons/fa6'

function Balance() {
  return (
    <div className="bg-[#9a9fae] m-2 p-5 font-bold text-[2rem] flex flex-col  gap-3 cursor-pointer shadow-lg">
     <p className='text-[1rem]'>BALANCE</p>
     <p className='flex items-center gap-2'><FaWallet className='text-[#101f28]' /> <span> $0.00</span></p> 
    </div>
  )
}

export default Balance
