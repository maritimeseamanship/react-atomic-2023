
/*Зробити компонент, в якому буде форма, за допомоги якої можливо
 створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users*/

import './App.css';
import {UserContainer} from "./components/UserContainer/UserContainer";
import {Users} from "./components/UserContainer/Users/Users";

const App = () => {
  return (
    <div className="App">
                  <UserContainer/>

    </div>
  );
};
export {App} ;
