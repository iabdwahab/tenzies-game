import NewGameButton from "./NewGameButton"

const Modal = ({ gameResult, rollsCount, createNewGame }) => {
  return (
    <div className="bg-[#6161612c] absolute w-screen h-screen left-0 top-0 flex justify-center items-center px-4">
      <div className="bg-white p-4 rounded-lg w-full md:w-fit md:min-w-[450px]">
        <h2 className={`text-2xl font-bold ${gameResult === 'won' ? 'text-correct' : 'text-wrong'}`}>You {gameResult}.</h2>
        <hr className="my-4" />
        <h3 className="font-bold text-lg">Rolls: {rollsCount}.</h3>
        <NewGameButton handleClick={createNewGame} />
      </div>
    </div>
  )
}

export default Modal