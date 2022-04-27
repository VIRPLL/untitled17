import css from "./PostDetails.module.css"

const PostDetail = ({post}) => {

    const {id, userId, title, body} = post

    return (
        <div className={css.box}>
            <p>Id - {id}</p>
            <p>User Id - {userId}</p>
            <p>Title - {title}</p>
            <p>Body - {body}</p>
        </div>
    );
};

export {PostDetail};