import Balance from "./components/Balance"
import Header from "./components/Header"
import Changes from "./components/Changes"
import History from "./components/History"
import NewTransaction from "./components/NewTransaction"
import { db } from "./firebase/config"
import { useEffect, useLayoutEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

function App() {
  const [Transaction,setTransaction] = useState([])
  const [income,setincome] = useState(0)
  const [Expense,setExpense] = useState(0)
  const [bal,setBal] = useState(0)

  useLayoutEffect(() =>{
     const fetchData = async() => {
      try{
        const response = await getDocs(collection(db,'transactions'))
        const data = response.docs.map((doc) => (
          {...doc.data(), id:doc.id}
        ))
        setTransaction(data)
      }
       catch(err){
        console.log(err)
       }
     }
     fetchData()
  },[Transaction])

  const Amount = () => {
    let totalIncome = 0;
    let totalExpense = 0;
  
    Transaction.forEach((transaction) => {
      if (transaction.transactionType === 'income') {
        totalIncome += transaction.amount;
      } else {
        totalExpense -= transaction.amount;
      }
    });
  
    setincome(totalIncome);
    setExpense(totalExpense);
  };
  

useLayoutEffect(() => {
  Amount()
},[Transaction])

const total = () => {
  setBal(income + Expense)
}

useEffect(() => {
  total()
})

 
  return (
    
    <section className="max-w-[400px] h-screen mx-auto border p-2 bg-[#ffffff] relative flex flex-col gap-3">
      <Header /> 
      <Balance bal={bal}/>
      <Changes income={income} Expense={Expense}/>
      <History Transaction={Transaction}/>
      <NewTransaction />
    </section>
  )
}

export default App
