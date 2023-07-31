import React from 'react';
import './Simpson.css';
const Simpson = (props) => {
    let{name, surname, age, photo} = props;
    return (
        <div className={"member"}>
              <h2> {name} {surname} {age} </h2>
              <img src={photo} alt={name}/>
        </div>
    );
};
export default Simpson;
