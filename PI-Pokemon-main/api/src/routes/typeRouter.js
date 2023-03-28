const {Router} = require('express');
const getTypes = require('../handlers/typeHandler');

const router = Router();

router.get('/', getTypes)

module.exports = router;