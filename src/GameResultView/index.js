import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImageContainer,
  ResultText,
  ResultImageItem,
  PlayAgainButton,
  ResultButtonContainer,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = opponentChoice

  const onClickPlayAgainButton = () => {
    playAgain(id)
  }

  return (
    <ShowResultContainer>
      <ResultImagesContainer>
        <ResultTextImageContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImageContainer>
        <ResultTextImageContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={imageUrl} alt="opponent choice" />
        </ResultTextImageContainer>
      </ResultImagesContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResultView
