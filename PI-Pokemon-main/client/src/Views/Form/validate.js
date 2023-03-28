const validateUrl = (URL) => {
    const regex = new RegExp(/(https?:\/\/.*\.(?:png|jpg|svg))/);
    return regex.test(URL);
};


export const validate = (info) => {
    let error = {};

    if(info.name.length > 0 && info.name.length < 4) error.name = 'The name must be longer than 4 letters';
    if(info.name.length > 15) error.name = 'The name cannot be longer than 15 letters';
    if(info.strength <= 0) error.strength = 'The strength is needed';
    if(info.defense <= 0) error.defense = 'The defense is needed';
    if(info.attack <= 0) error.attack = 'The attack is needed';
    if(info.height <= 0) error.height = 'The height is needed';
    if(info.weight <= 0) error.weight = 'The weight is needed';
    if(info.speed <= 0) error.speed = 'The speed is needed';
    if(!info.name) error.name = 'You must to  put a name';
    if(info.hp <= 0) error.hp = 'The hp is needed';
    if(validateUrl(info.image) && info.image !== '') error.image = 'Unsupported format';
    return error;
}