import {useState, useEffect} from "react";
import {User} from "../User/User";
import {userServices} from "../../userServices/userServices";
const Users = () => {
    const [users, setUsers] = useState([]);

   useEffect(() =>{
       userServices.getAll().then(value => value.data).then(data => setUsers(data))
       },[]
   )

    return (
        <div >
            {users.map(user  => <User key={user.id} user={user} setUsers={setUsers}/>)}
        </div>
    );
};

export {Users} ;