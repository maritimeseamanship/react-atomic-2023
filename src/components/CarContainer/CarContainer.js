import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useState} from "react";
const CarContainer = () => {
   const [onSave, setOnSave] = useState([])
    const [carForUpdate, setCarForUpdate] = useState([])
    return (
        <div>
              <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>

        </div>
    );
};

export {CarContainer};
