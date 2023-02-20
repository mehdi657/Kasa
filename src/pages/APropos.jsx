import React from 'react'
import Banner from '../components/Banner'
import image from '../assets/banner2.png'
import textes from '../datas/textes'
import Volet from '../components/Volet'

const APropos = () => {
  return (
    <>
      <section className="about_banner">
        <Banner image={image} alt={textes.altBanner2} text={textes.null} />
      </section>
      <section className="about_section">
        <Volet titre="Fiabilité" texte={textes.fiabilité} />
        <Volet titre="Respect" texte={textes.respect} />
        <Volet titre="Service" texte={textes.service} />
        <Volet titre="Sécurité" texte={textes.sécurité} />
      </section>
    </>
  )
}

export default APropos
