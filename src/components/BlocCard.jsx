import { Annonces } from "../datas/Annonces";
const target = "_blank";

function BlocAnnonces() {
  return (
    <section className="cards">
      {Annonces.map((Annonce) => (
        <aside key={Annonce.id} className="card">
          <a
            href="https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0&t=BlIQQJMqcCu01fWO-0"
            target={target}
          >
            <img src={Annonce.cover} alt={Annonce.title} className="card_img" />
            <div className="card_gradient"></div>
            <p className="card_titre">{Annonce.title}</p>
          </a>
        </aside>
      ))}
    </section>
  );
}

export default BlocAnnonces;
