import css from "./Post.module.css"
import {Button} from "../Button/Button";

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={css.box}>
            <p>Id - {id}</p>
            <p>Title - {title}</p>
            <Button to={id.toString()} state={post}>Details</Button>
        </div>
    );
};

export {Post};