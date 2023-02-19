import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

const Arrow = (props) => {
  return (
    <>
      <nav className="slider_previous" onClick={props.prev}>
        <img src={arrowLeft} alt="" />
      </nav>
      <nav className="slider_next" onClick={props.next}>
        <img src={arrowRight} alt="" />
      </nav>
    </>
  )
}

export default Arrow
