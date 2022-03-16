import { APP_API_URL } from "./servicesUtils";
import axios from "axios";

const getCharacterUrl=`${APP_API_URL}/character`

const getCharacter=(courrenrPage)=>{
    return axios.get(`${getCharacterUrl}/?page=${courrenrPage}`)
}
const getAllCharacters=()=>{
    return axios.get(`${getCharacterUrl}/.`)
}
const getCharacterById=(id)=>{
    return axios.get(`${getCharacterUrl}/${id}`)
}
const getSearchCharacter=(name)=>{
    return axios.get(`${getCharacterUrl}/?name=${name}`)
}
const getCharactersById=(id)=>{
    return axios.get(`${getCharacterUrl}/${id}`)
}
export{
    getCharacter,
    getCharacterById,
    getAllCharacters,
    getSearchCharacter,
    getCharactersById
}