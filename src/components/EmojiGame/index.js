import {component} from 'react'
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
  render() {
    return <h1>Hello, User</h1>
  }
}

export default EmojiGame
