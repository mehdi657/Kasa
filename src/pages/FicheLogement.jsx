import React from 'react'
import { useParams } from 'react-router'
import { Annonces } from '../datas/Annonces'
import Slider from '../components/Slider'
import Tags from '../components/Tags'
import Volet from '../components/Volet'
import Star from '../components/Star'

const FicheLogement = () => {
  const { id } = useParams()
  const res = Annonces.find((data) => data.id === id)

  return (
    <section className="fiche">
      <Slider slides={res.pictures} />
      <aside className="fiche_contnair1">
        <div className="fiche_infos">
          <h1>{res.title}</h1>
          <h3>{res.location}</h3>
          <ul>
            {res.tags.map((tag, index) => (
              <Tags key={index} tage={tag} />
            ))}
          </ul>
        </div>
        <div className="fiche_contact">
          <div className="fiche_contact_bloc">
            <div className="fiche_contact_name">{res.host.name}</div>
            <div className="fiche_contact_pict">
              <img src={res.host.picture} alt="profil" />
            </div>
          </div>
          <div className="fiche_contact_star">
            <Star rating={res.rating} />
          </div>
        </div>
      </aside>
      <aside className="fiche_contnair2">
        <div className="fiche_contnair2_volet">
          <Volet titre="Description" texte={res.description} />
        </div>
        <div className="fiche_contnair2_volet">
          <Volet
            titre="Équipements"
            texte={res.equipments.map((equip, x) => (
              <p key={'equip' + x}>{equip}</p>
            ))}
          />
        </div>
      </aside>
    </section>
  )
}

export default FicheLogement
