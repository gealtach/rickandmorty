const { Type } = require('../db');
const axios = require('axios')

const getTypeController = async () => {
    const ans = await Type.findAll();
    if(ans.length === 0){
        const {data} = await axios('https://pokeapi.co/api/v2/type/');
        const ans2 = data.results.map((e) => e.name);
        ans2.forEach((e)=>Type.create({name: e}));
        console.log('DB Charged')
        return ans2
    }
    let aux = [];
    ans.forEach((e)=> aux.push(e.name));
    return aux;
}

module.exports = getTypeController;