import Balance from "./components/Balance"
import Header from "./components/Header"
import Changes from "./components/Changes"

function App() {
  
  return (
    <section className="max-w-[400px] h-screen mx-auto border p-2">
      <Header /> 
      <Balance />
      <Changes />
    </section>
  )
}

export default App
