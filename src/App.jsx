import DicesContainer from "./components/DicesContainer"
import Header from "./components/Header"
import RollButton from "./components/RollButton"

function App() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:py-20 text-center">
      <Header />
      <main className="max-w-[450px] mx-auto">
        <DicesContainer />
        <RollButton />
      </main>
    </div>
  )
}

export default App
