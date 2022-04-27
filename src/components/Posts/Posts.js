import {useEffect, useState} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";
import  css from "./Posts.module.css"
// import {MyContext} from "../../index"
import {useSearchParams} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] =useState([]);

    // const value = useContext(MyContext);
    //
    // console.log(value);

    const [query, setQuery] =useSearchParams({page:"1"});

    useEffect(()=>{
        postService.getAll(query.get("page")).then(({data}) => setPosts(data));
    },[query])

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj)
    }

    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page--
        setQuery(queryObj)
    }

    return (
        <div>
            <div className={css.flex}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

            <div>
                <button onClick={()=>prevPage()}>Prev</button>
                <button onClick={()=>nextPage()}>Next</button>
            </div>

        </div>
    );
};

export {Posts};