import DicesContainer from "./components/DicesContainer"
import Header from "./components/Header"

function App() {
  return (
    <div className="mx-auto max-w-2xl px-2 py-7">
      <Header />
      <main>
        <DicesContainer />
      </main>
    </div>
  )
}

export default App
