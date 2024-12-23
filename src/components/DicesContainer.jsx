import Dice from "./Dice"

const DicesContainer = ({ dicesData }) => {

  const diceElements = dicesData.map(dice => {
    return <Dice diceData={dice} />
  })

  return (
    <div className="my-10 grid grid-cols-5 gap-8">
      {diceElements}
    </div>
  )
}

export default DicesContainer