import { useEffect, useRef, useState } from "react"
import DicesContainer from "./components/DicesContainer"
import Header from "./components/Header"
import RollButton from "./components/RollButton"
import dicesList from "./dicesList"
import { isAllSelected, isWon } from "./utils/generalUtils"
import Modal from "./components/Modal"

function App() {
  const [dicesData, setDicesData] = useState(dicesList);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameResult, setGameResult] = useState('');
  const [rollsCount, setRollsCount] = useState(1);
  const mainSectionElement = useRef(null);

  console.log(rollsCount)
  useEffect(() => {

    if (isAllSelected(dicesData)) {
      setIsGameOver(true);

      if (isWon(dicesData)) {
        mainSectionElement.current.classList.add('won');
        setGameResult('won');
      } else {
        mainSectionElement.current.classList.add('lose');
        setGameResult('lose')
      }
    }

  }, [dicesData])

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:py-20 text-center">
      {isGameOver && <Modal gameResult={gameResult} rollsCount={rollsCount} />}
      <Header />
      <main className="max-w-[450px] mx-auto" ref={mainSectionElement}>
        <DicesContainer dicesData={dicesData} setDicesData={setDicesData} />
        <RollButton setDicesData={setDicesData} isGameOver={isGameOver} setRollsCount={setRollsCount} />
      </main>
    </div>
  )
}

export default App
