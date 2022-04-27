import {axiosService} from "./axiosService";
import {urls} from "../constants";

const postService = {
    getAll:(page, _limit=20)=>axiosService.get(urls.posts, {
        params:{
            _start:(page - 1) * _limit,
            _limit
        }
    }),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {postService}