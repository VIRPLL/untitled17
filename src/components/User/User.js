const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <p>Id - {id}</p>
            <p>Name - {name}</p>
            <p>User Name - {username}</p>
            <p>Email - {email}</p>
            <hr/>
        </div>
    );
};

export {User};