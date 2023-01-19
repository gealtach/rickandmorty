import Cards from '../Cards/Cards'
import Nav from '../Nav/Nav'
import style from './Home.module.css'
import { useState } from 'react'


export default function Home (){

    const [characters, setCharacters] = useState([]);

    const onSearch = (character) => {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
  
    }
  
    const onClose = (id) => {
      setCharacters(
        characters.filter(character => character.id !== id)
      )
    }
    return(
        <>
            <div>
                <Nav onSearch={onSearch} />
            </div>
            <div className={style.container}>
                <Cards onClose={onClose}
                characters={characters}
                />
            </div>
        </>
    )
}