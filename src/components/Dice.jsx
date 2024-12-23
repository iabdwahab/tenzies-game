const Dice = ({ diceData }) => {
  const className = `border rounded shadow-md aspect-square font-bold text-2xl text-[#2B283A] ${diceData.selected ? 'bg-[#59E391]' : ''}`;

  return (
    <button className={className}>{diceData.number}</button>
  )
}

export default Dice