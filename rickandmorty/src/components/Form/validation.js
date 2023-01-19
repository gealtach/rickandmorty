export const validateUser = (str) => {
    if(str.length === 0){
        return false;
    }
    if(str.length > 35){
        return false;
    }
    if(!/\S+@\S+\.\S+/.test(str)){
        return false;
    }
    else{return true;}
}

export const validatePass = (str) => {
    if(str.length < 6 || str.length > 35){
        return false
    }
    if(!/\d/.test(str)){
        return false;
    }
    else{return true}
}