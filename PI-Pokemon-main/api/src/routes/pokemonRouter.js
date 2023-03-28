const {Router} = require('express');

const {getAll, getId, postPokemon} = require('../handlers/pokemonHandler')

const router = Router();

router.get('/', getAll)
router.get('/:idPokemon', getId)
router.post('/', postPokemon)

module.exports = router;
