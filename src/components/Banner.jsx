// import banner from "../assets/banner.jpg";
import banner from "../assets/banner.png";

const Banner = () => {
    return (
        <nav className="banner">
      <h2 className="banner_titre">Chez vous, partout et ailleurs</h2>
      <img src={banner} alt="Falaise devant la mer" className="banner_img" />
    </nav>
    );
};

export default Banner;



