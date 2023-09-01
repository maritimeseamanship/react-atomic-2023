/*Зробити компонент, в якому буде форма, за допомоги якої можливо
 створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
 */

import './App.css';
import {PostContainer} from "./components/PostContainer/PostContainer";

const App = () => {
  return (
    <div className="App">
                         <PostContainer/>
    </div>
  );
};

export {App};
