import style from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({name, image, type, id}) => {
    return(
        <Link to={'/pokemons/'+id}>
            <button className={style.container}>
                <img src={image} alt='F'/>
                <h3>{name}</h3>
                <p>{type}</p>
            </button>
        </Link>
    )
}

export default Card;