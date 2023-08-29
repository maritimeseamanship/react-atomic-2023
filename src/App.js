import "./App.css";
import {UserContainer} from "./components/UserContainer/UserContainer";
import {Posts} from "./components/Posts/Posts";
import {useState} from "react";

const App = () => {
  const [userId, setUserId]  = useState(null);

  return (
    <div className={'App'}>
             <UserContainer setUserId={setUserId}/>
      <hr/>
      {userId && <Posts userId={userId}/>}
    </div>
  );
};

export {App};
