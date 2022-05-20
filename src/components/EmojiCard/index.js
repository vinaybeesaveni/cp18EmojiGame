import './index.css'

const EmojiCard = props => {
  const {emoji, shuffleEmojis} = props
  const {emojiName, emojiUrl, id} = emoji
  const onClickingEmoji = () => {
    shuffleEmojis(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={onClickingEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
