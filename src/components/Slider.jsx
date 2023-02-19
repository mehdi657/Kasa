import { useState } from 'react'
import Arrow from './Arrow'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const number = current + 1

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <aside className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slider_active' : 'slider_inactive'}
          >
            {index === current && (
              <img
                src={picture}
                alt={"aperçu de l'appartement n°" + number}
                className="slider_picture"
              />
            )}
          </div>
        )
      })}
      <p className="slider_number">{number + '/' + length}</p>
      {length > 1 ? <Arrow next={nextSlide} prev={prevSlide} /> : null}
    </aside>
  )
}

export default Slider
