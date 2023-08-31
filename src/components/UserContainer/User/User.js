const User = ({user}) => {
    const {id, name, username, email, address: {street, city}, phone, website} = user

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <div>city: {city}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>

        </div>
    );
};

export {User} ;