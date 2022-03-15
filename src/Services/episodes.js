import { APP_API_URL } from "./servicesUtils";
import axios from "axios";

const getEpisodesUrl=`${APP_API_URL}/episode`

const getEpisodes=()=>{
    return axios.get(getEpisodesUrl)
}

export{
    getEpisodes
}
