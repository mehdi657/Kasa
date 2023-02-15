const Banner = ({ text, image, alt }) => {
  return (
    <nav className="banner">
      <h2 className="banner_titre">{text}</h2>
      <img src={image} alt={alt} className="banner_img" />
    </nav>
  )
}

export default Banner
