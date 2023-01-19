import { ADD_FAVORITE, DELETE, DELETE_FAV } from "./actionTypes";

export const addFavorite = () => {return {type : ADD_FAVORITE}};
export const deleteFav = () => {return {type : DELETE_FAV}};