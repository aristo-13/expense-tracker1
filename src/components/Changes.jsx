
function Changes( {income,Expense} ) {
    return (
      <div className="grid grid-cols-2 place-content-center p-2 gap-1 border shadow-sm m-2">
         <div className=" p-5 rounded text-[11px] sm:text-[1.2rem] text-center font-bold border text-[green]">+{income.toLocaleString('en-GH', { style: 'currency',currency: 'GHS',})}</div>
         <div className="p-5 rounded text-[11px] sm:text-[1.2rem] text-center font-bold text-[red] border">{Expense.toLocaleString('en-GH', { style: 'currency',currency: 'GHS',})}</div>
      </div>
    )
  }
  
  export default Changes
  