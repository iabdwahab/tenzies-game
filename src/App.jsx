import { useEffect, useRef, useState } from "react"
import DicesContainer from "./components/DicesContainer"
import Header from "./components/Header"
import RollButton from "./components/RollButton"
import dicesList from "./dicesList"
import { isAllSelected, isWon } from "./utils/generalUtils"

function App() {
  const [dicesData, setDicesData] = useState(dicesList);
  const mainSectionElement = useRef(null);

  useEffect(() => {

    if (isAllSelected(dicesData)) {
      if (isWon(dicesData)) {
        mainSectionElement.current.classList.add('won');
      } else {
        mainSectionElement.current.classList.add('lose');
      }
    }

  }, [dicesData])

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:py-20 text-center">
      <Header />
      <main className="max-w-[450px] mx-auto" ref={mainSectionElement}>
        <DicesContainer dicesData={dicesData} setDicesData={setDicesData} />
        <RollButton setDicesData={setDicesData} />
      </main>
    </div>
  )
}

export default App
