import {Posts} from "../../components";
import {Outlet} from "react-router-dom";

const PostPage = () => {

    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export  {PostPage};