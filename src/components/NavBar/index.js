import './index.css'

const NavBar = props => {
  const {score, topScore, isGameWon, isGameOver} = props

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      <div className="score-container">
        {isGameWon || isGameOver ? (
          ''
        ) : (
          <>
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
