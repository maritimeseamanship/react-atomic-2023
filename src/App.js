import './App.css';
import {useEffect, useState} from "react";
import {Users} from "./components/Users/Users";

const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => setUsers(users));
    }, []);
    return (
        <div className="App">
            <Users users={users}/>
        </div>
    );
}

export {App};
