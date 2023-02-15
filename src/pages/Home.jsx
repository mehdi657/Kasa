import React from 'react'
import Banner from '../components/Banner'
import BlocCard from '../components/BlocCard'
import image from '../assets/banner1.png'
import textes from '../datas/textes'

const Home = () => {
  return (
    <>
      <Banner image={image} text={textes.slogan} alt={textes.altBanner1} />
      <BlocCard />
    </>
  )
}

export default Home
