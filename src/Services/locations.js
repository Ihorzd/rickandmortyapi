import { APP_API_URL } from "./servicesUtils";
import axios from "axios";

const getLocationUrl=`${APP_API_URL}/location`

const getLocation=()=>{
    return axios.get(getLocationUrl)
}

export{
    getLocation
}