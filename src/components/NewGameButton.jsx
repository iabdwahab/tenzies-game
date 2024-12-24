const NewGameButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="bg-black text-white w-full mt-4 py-2 rounded font-medium">New Game</button>
  )
}

export default NewGameButton