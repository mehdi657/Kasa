import React from 'react'
import { Link } from 'react-router-dom'

const Annoce = (props) => {
  // const id = {props.data.id}
  return (
    <aside className="card" id={props.data.id}>
      <Link to={`FicheLogement/${props.data.id}`}>
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
