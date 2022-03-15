import { APP_API_URL } from "./servicesUtils";
import axios from "axios";

const getCharacterUrl=`${APP_API_URL}/character`

const getCharacter=()=>{
    return axios.get(getCharacterUrl)
}

export{
    getCharacter
}