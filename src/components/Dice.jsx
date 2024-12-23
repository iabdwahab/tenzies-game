const Dice = ({ diceData, setDicesData }) => {
  const { id, number, selected } = diceData;
  const className = `dice-button border rounded shadow-md aspect-square font-bold text-2xl text-[#2B283A] ${selected ? 'bg-primary' : ''}`;

  function handleClick() {
    setDicesData(prevData => {

      return prevData.map(prevDice => {
        if (prevDice.id === id) {
          // Revert Selected Status
          return {
            ...prevDice,
            selected: !prevDice.selected
          }
        } else {
          return prevDice;
        }
      });

    });
  }

  return (
    <button className={className} onClick={handleClick}>{number}</button>
  )
}

export default Dice