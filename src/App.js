/*Реалізувати, використовуючи useForm хук, а також сервіс axios. Всі запити винести в сервісний рівень
1.
Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом
на http://jsonplaceholder.typicode.com/users
 */

import {UserContainer} from './UserContainer/UserContainer';
import './App.css';



const App = () => {
  return (
    <div className="App">
            <UserContainer/>
    </div>
  );
};

export {App} ;
