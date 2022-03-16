import { APP_API_URL } from "./servicesUtils";
import axios from "axios";

const getEpisodesUrl=`${APP_API_URL}/episode`

const getEpisodeById=(id)=>{
    return axios.get(`${getEpisodesUrl}/${id}`)
}

export{
    getEpisodeById
}
