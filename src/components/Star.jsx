import full from '../assets/star.png'
import empty from '../assets/starempty.png'

const Star = ({ rating }) => {
  const range = [1, 2, 3, 4, 5]
  const starType =
    rating < range.length ? (
      <img src={full} alt="star-icon" />
    ) : (
      <img src={empty} alt="star-icon" />
    )
  return (
    <>
      {range.map((rangeElem, index) =>
        rating >= rangeElem ? (
          <span key={'rangeElem' + index}>{starType}</span>
        ) : (
          <img src={empty} alt="star-icon" key={'rangeElem' + index} />
        )
      )}
    </>
  )
}

export default Star
