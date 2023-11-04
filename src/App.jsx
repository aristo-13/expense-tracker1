import Balance from "./components/Balance"
import Header from "./components/Header"
import Changes from "./components/Changes"
import History from "./components/History"
import NewTransaction from "./components/NewTransaction"

function App() {
  
  return (
    <section className="max-w-[400px] h-screen mx-auto border p-2 bg-[#ffffff]">
      <Header /> 
      <Balance />
      <Changes />
      <History />
      <NewTransaction />
    </section>
  )
}

export default App
