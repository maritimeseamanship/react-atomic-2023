import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";
import {useEffect, useState} from "react";
const CarContainer = () => {

    return (
        <div>
              <CarForm/>
            <hr/>
            <Cars/>

        </div>
    );
};

export {CarContainer};
