import React, { useState } from 'react'
import vector from '../assets/Vector.png'

function Volet({ titre, texte }) {
  const [visible, setVisible] = useState(false)

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
    setVisible(!visible)
  }

  let rotationClass = ''
  if (counter > 0) {
    rotationClass = `rotate-${counter % 2}`
  }

  return (
    <aside className="dropdown">
      <div className="dropdown_visibl">
        <p>{titre}</p>
        <button
          className={`btnOuverture ${rotationClass}`}
          onClick={handleClick}
        >
          <img src={vector} alt="bouton d'ouverture" />
        </button>
      </div>
      {visible && <div className="dropdown_hiden">{texte}</div>}
    </aside>
  )
}
export default Volet
