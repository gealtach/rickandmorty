const axios = require('axios');
const { Pokemon, Type } = require('../db');

const cleanArray = (array) => {
    const clean = array.map(element => {
        return {
            id: element.id,
            name: element.name,
            hp: element.stats[0].base_stat,
            attack: element.stats[1].base_stat,
            defense: element.stats[2].base_stat,
            speed: element.stats[5].base_stat,
            height: element.height,
            weight: element.weight,
            image: element.sprites.other.home.front_default,
            types: element.types.map(type => type.type.name),
            created: false
        }
    });

    return clean;
}

const cleanArrayDb = (array) => {
    const cleanDb = array.map(element => {
        return {
            id: element.id,
            name: element.name,
            hp: element.hp,
            attack: element.attack,
            defense: element.defense,
            speed: element.speed,
            height: element.height,
            weight: element.weight,
            image: element.image,
            types: element.Types.map(type => type.name),
            created: element.created
        }
    });
    return cleanDb;
}

const getAllPokemons = async () => {
    const dataBasePokemon = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] }
        }
    });

    const apiPokemonRaw = [];
    
    for(let i = 1; i < 51; i++) {
        apiPokemonRaw.push((await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)).data);
    }
    const apiPokemon = cleanArray(apiPokemonRaw);
    const dbPokemon = cleanArrayDb(dataBasePokemon);
    const results = [...dbPokemon, ...apiPokemon];
    return results;
}

const createInDb = async (name, hp, speed, height, attack, weight, defense, types, image) => {
    
    const pokemon = name.toLowerCase();
    const all = await getAllPokemons();
    const exists = all.filter((e) => e.name === pokemon);
    if(exists.length > 0) throw new Error(`The pokemon ${pokemon} already exits!!`);
    const newPokemon = { name, hp, speed, height, attack, weight, defense, image };

    const pokeCreated = await Pokemon.create(newPokemon);
    console.log(pokeCreated, 'soy paso 1')

    // const infoTotal = await pokeCreated.addTypes(types);
    // console.log(infoTotal, 'soy paso 2')

}

module.exports = {
    getAllPokemons, createInDb
}