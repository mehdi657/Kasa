import { Annonces } from "../datas/Annonces";
import "../styles/BlocAnnonces.css";
const target = "_blank";

function BlocAnnonces() {
  return (
    <div className="contAnnonces">
      {Annonces.map((Annonce) => (
        <aside key={Annonce.id}>
          <a
            href="https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3%3A0&t=BlIQQJMqcCu01fWO-0"
            target={target}
          >
            <img src={Annonce.cover} alt={Annonce.title} className="img_ann" />
            <p>{Annonce.title}</p>
          </a>
        </aside>
      ))}
    </div>
  );
}

export default BlocAnnonces;
