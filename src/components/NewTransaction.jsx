import { addDoc } from "firebase/firestore"
import { useState } from "react"
import { collection } from "firebase/firestore"
import { db } from "../firebase/config"

function NewTransaction() {
  const [text,setText] = useState('')
  const [amount,setAmount] = useState('')
  const [type,setType] = useState('')

  const CreateTransaction = async (e) => {
    e.preventDefault();
    
    if (!text || !amount || !type) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
     const res = await addDoc(collection(db, 'transactions'), {
        text: text,
        amount: parseFloat(amount), 
        transactionType: type,
      });
      console.log(res)
      
      setText('');
      setAmount('');
      setType('');
    } catch (err) {
      console.log(err);
      alert('An error occurred while adding the transaction.');
    }
  };
  

  return (
    <div className="p-2 w-full flex flex-col gap-2">
       <h2 className="w-full bg-cyan-700 p-1 text-white">New Transactions</h2>
       <form className="flex flex-col w-full gap-1 font-medium" onSubmit={(e) => CreateTransaction(e)}>
          <input className="p-2 border" type="text" placeholder="Add a Text" id="Text" value={text} onChange={(e) => setText(e.target.value)} required/>
          <input className="p-2 border" type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
          <input className="p-2 border" type="text" placeholder="Transaction type(income/expense)" value={type} onChange={(e) => setType(e.target.value)} required/>
          <input type="submit" value="Add New Transaction" className="border p-2 bg-lime-600 text-white cursor-pointer"/>
       </form>
    </div>
  )
}

export default NewTransaction
