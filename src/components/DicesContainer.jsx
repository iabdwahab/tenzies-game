import Dice from "./Dice"

const DicesContainer = ({ dicesData, setDicesData }) => {

  const diceElements = dicesData.map(dice => {
    return <Dice key={dice.id} diceData={dice} setDicesData={setDicesData} />
  })

  return (
    <div className="my-10 grid grid-cols-5 gap-8">
      {diceElements}
    </div>
  )
}

export default DicesContainer