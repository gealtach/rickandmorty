const getTypeController = require("../controller/typeController");

const getTypes = async (req, res) => {
    try {
        const ans = await getTypeController();
        res.status(200).json(ans);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getTypes;