const RollButton = ({ setDicesData }) => {
  const className = 'bg-[#5035FF] text-white font-bold w-full px-10 py-2 rounded text-lg ';

  function handleClick() {

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
    <button className={className} onClick={handleClick}>Roll</button>
  )
}

export default RollButton