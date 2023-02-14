import { Link } from "react-router-dom";

const Erreur = () => {
    return (
        <section className='erreur'>
            <p className='erreur_code'>404</p>
            <p className='erreur_message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
    );
};

export default Erreur;