import { ADD_FAVORITE, DELETE_FAV } from "./actionTypes";

const initialState = {
    myFavorites : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites : action.payload
            }

        case DELETE_FAV:
            return {
                ...state,
                myFavorites : action.payload
            }

        default:
            return {...state}
    }
}

export default reducer;