
function NewTransaction() {
  return (
    <div className="p-2 w-full flex flex-col gap-2">
       <h2 className="w-full bg-cyan-700 p-1 text-white">New Transactions</h2>
       <form className="flex flex-col w-full gap-1 font-medium">
          <label htmlFor="Text">Text</label>
          <input className="p-2 border" type="text" placeholder="Add a Text" id="Text"/>
          <label htmlFor="amt">Amount</label>
          <input className="p-2 border" type="number" placeholder="amount"/>
          
          <input type="submit" value="Add New Transaction" className="border p-2 bg-lime-600 text-white cursor-pointer"/>
       </form>
    </div>
  )
}

export default NewTransaction
