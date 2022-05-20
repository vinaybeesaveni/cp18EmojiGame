import './index.css'

const WinOrLoseCard = props => {
  const {isGameOver, isGameWon, score, playAgain} = props
  const onClickingPlayAgain = () => {
    playAgain()
  }
  return (
    <>
      <div className="win-or-lose-container">
        {isGameOver ? (
          <div className="lose-score-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="lost-img"
            />
            <div className="for-medium-device-container">
              <h1 className="lose-heading">You Lose</h1>
              <div className="your-score-container">
                <p className="lose-score-heading">Score</p>
                <p className="lose-score">{score}/12</p>
              </div>
              <button
                type="button"
                className="play-again-btn"
                onClick={onClickingPlayAgain}
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        {isGameWon ? (
          <div className="lose-score-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
              className="lost-img"
            />
            <div className="for-medium-device-container">
              <h1 className="lose-heading">You Won</h1>
              <div className="your-score-container">
                <p className="lose-score-heading">Best Score</p>
                <p className="lose-score">{score}/12</p>
              </div>
              <button
                type="button"
                className="play-again-btn"
                onClick={onClickingPlayAgain}
              >
                Play Again
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default WinOrLoseCard
