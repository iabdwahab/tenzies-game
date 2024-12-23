import Dice from "./Dice"

const DicesContainer = () => {
  return (
    <div className="my-10 grid grid-cols-5 gap-8 max-w-[450px] mx-auto">
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
      <Dice />
    </div>
  )
}

export default DicesContainer