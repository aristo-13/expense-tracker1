import { FaTrashCan } from "react-icons/fa6"

function TransactionsHistory({Transaction,setdelbtn,delbtn}) {
  return (
    <div>
        {
        Transaction.map((transaction) => (
            <h1 onMouseEnter={() => setdelbtn(!delbtn)} className="text-black p-2 m-1 w-full border flex justify-between">{delbtn && <FaTrashCan />}{transaction.text} <span className={transaction.transactionType === 'income'? "text-green-700 font-bold" : "text-red-600 font-bold"}>{transaction.transactionType === 'income'? '+' +transaction.amount.toLocaleString('en-US', { style: 'currency',currency: 'USD',}) : "-" +transaction.amount.toLocaleString('en-US', { style: 'currency',currency: 'USD',})}</span></h1>
        ))}
    </div>
  )
}

export default TransactionsHistory
