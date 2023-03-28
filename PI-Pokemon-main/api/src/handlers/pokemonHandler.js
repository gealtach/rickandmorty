const { getAllPokemons, createInDb } = require('../controller/pokemonController');

const getAll = async (req, res) => {

    const {name} = req.query;
    const all = await getAllPokemons();
    if(name){
        try {
            const filtered = all.filter((e) => e.name === name.toLowerCase());
            if(!filtered){return res.status(400).json(`Pokemon ${name} has not been found`)}
            return res.status(200).json(filtered)
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
    try {
        res.status(200).json(all)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getId = async (req, res) => {
    const {idPokemon} = req.params;
    try {
        const all = await getAllPokemons();
        const filtered = all.find((e) => e.id == idPokemon);
        res.status(200).json(filtered);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postPokemon = async (req, res) =>{
    const { name, hp, speed, height, attack, weight, defense, types, image } = req.body;
    try {
        await createInDb(name, hp, speed, height, attack, weight, defense, types, image);
        res.status(200).json(`The pokemon ${name} has been created successfully!!`);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    getAll,
    getId,
    postPokemon
}