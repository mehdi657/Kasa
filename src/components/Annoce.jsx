import React from 'react'
import { Link } from 'react-router-dom'

const Annoce = (props) => {
  return (
    <aside className="card">
      <Link to="FicheLogement">
        <img
          src={props.data.cover}
          alt={props.data.title}
          className="card_img"
        />
        <div className="card_gradient"></div>
        <p className="card_titre">{props.data.title}</p>
      </Link>
    </aside>
  )
}

export default Annoce
