import {UserForm} from "./UserForm/UserForm";
import {createContext, useState} from "react";
import {Users} from "./Users/Users";
 const Context = createContext(null);
const UserContainer = () => {
    const[trigger, setTrigger] =  useState(null)

    return (
        <Context.Provider value={{
            trigger,
            setTrigger: () => setTrigger(prev=>!prev)
        }}>
            <UserForm/>
            <hr/>
            <Users/>
        </Context.Provider>
    );
};

export {UserContainer, Context} ;
