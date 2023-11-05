import { useState } from "react"
import { FaAngleRight, FaX,FaTrashCan } from "react-icons/fa6"
import TransactionsHistory from "./TransactionsHistory"

function History({Transaction}) {
  const [showHistory,setShowHistory] = useState(false)
  const [delbtn,setdelbtn] = useState(false)


  return (
    <main className="p-2 w-full border cursor-pointer">
        <div onClick={() => setShowHistory(!showHistory)} className="p-2 w-full border flex justify-between items-center cursor-pointer">
            <h3>Transaction History</h3>
            <FaAngleRight />
        </div>
        {
        showHistory && <div className="absolute top-[50%] left-[50%] bg-white z-[1] w-[90%] h-[90%] p-5 border-2 translate-x-[-50%] translate-y-[-50%] overflow-auto">
            <p className="flex items-center p-3 gap-2"><FaX  onClick={() => setShowHistory(!showHistory)}/> Transaction History</p>
            
            {Transaction.length > 0 && <TransactionsHistory Transaction={Transaction} setdelbtn={setdelbtn} delbtn={delbtn}/>}
            {!Transaction.length > 0 && <p className="text-center m-5 text-[red]">No transactions</p>}
        </div>
        }
    </main>
  )
}

export default History
