const RollButton = ({ setDicesData, isGameOver, setRollsCount }) => {
  const className = 'bg-black text-white font-bold w-full px-10 py-2 rounded text-lg disabled:bg-[#afafaf]';

  function handleClick() {
    setRollsCount(prevRollsCount => prevRollsCount + 1)

    setDicesData(prevData => {
      return prevData.map(prevDice => {
        if (!prevDice.selected) {
          return {
            ...prevDice,
            number: Math.floor(Math.random() * 6) + 1,
          }
        } else {
          return prevDice
        }
      })
    })

  }

  return (
    <button className={className} disabled={isGameOver} onClick={handleClick}>Roll</button>
  )
}

export default RollButton