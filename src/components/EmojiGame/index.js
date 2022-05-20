import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isGameOver: false,
  }

  shuffleEmojis = id => {
    const {clickedEmojis} = this.state
    if (!clickedEmojis.includes(id)) {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({isGameOver: true})
    }
  }

  playAgain = () => {
    let {topScore} = this.state
    const {score} = this.state
    if (topScore < score) {
      topScore = score
    }
    this.setState({
      clickedEmojis: [],
      score: 0,
      topScore,
      isGameOver: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {score, isGameOver, topScore} = this.state
    const isGameWon = score === 12
    const shuffledEmojis = emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="bg-container">
        <Navbar
          score={score}
          topScore={topScore}
          isGameWon={isGameWon}
          isGameOver={isGameOver}
        />
        {isGameOver || isGameWon ? (
          <WinOrLoseCard
            isGameWon={isGameWon}
            isGameOver={isGameOver}
            score={score}
            playAgain={this.playAgain}
          />
        ) : (
          <div className="emoji-container">
            <ul className="emoji-list-container">
              {shuffledEmojis.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emoji={eachEmoji}
                  shuffleEmojis={this.shuffleEmojis}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
