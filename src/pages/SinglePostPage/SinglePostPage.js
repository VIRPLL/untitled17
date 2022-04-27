import {useLocation, useParams} from "react-router-dom";
import {PostDetail} from "../../components";
import {useEffect, useState} from "react";
import {postService} from "../../services";

const SinglePostPage = () => {

    const {id} = useParams()
    const {state} = useLocation()

    const [post, setPost] = useState(state);

    useEffect(()=>{
        if(!state) {
            postService.getById(id).then(({data}) => setPost(data));
        } else {
            setPost(state);
        }
    },[id, state])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {SinglePostPage};