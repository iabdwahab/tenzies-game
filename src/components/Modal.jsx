const Modal = ({ gameResult, rollsCount }) => {
  return (
    <div className="bg-[#6161612c] absolute w-screen h-screen left-0 top-0 flex justify-center items-center px-4">
      <div className="bg-white p-4 rounded-lg w-full md:w-fit md:min-w-[450px]">
        <h2 className={`text-2xl font-bold ${gameResult === 'won' ? 'text-correct' : 'text-wrong'}`}>You {gameResult}.</h2>
        <hr className="my-4" />
        <h3 className="font-bold text-lg">Rolls: {rollsCount}.</h3>
        <button className="bg-black text-white w-full mt-4 py-2 rounded font-medium">New Game</button>
      </div>
    </div>
  )
}

export default Modal