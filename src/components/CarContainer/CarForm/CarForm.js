import {useState} from "react";
 const CarForm = ({setOnSave}) => {
    const initialState= {
        brand:'',
        price:'',
        year:''

 }
     const [car, setCar] = useState(initialState);
 const inputHandle = (e)  => {
        setCar(prev => ({...prev, [e.target.name]:e.target.value}))
 }
 const save = (e) =>{
     e.preventDefault()
     fetch('http://owu.linkpc.net/carsAPI/v1/cars',
         {headers:{'content-type': 'application/json'},
         body: JSON.stringify(car),
         method: 'POST'})
         .then(value => value.json())
         .then(value => {setOnSave(prev =>!prev)
         setCar(initialState)})

 }
    return(
        <form onSubmit={save}>
           <div><label>brand: <input type='text' value={car.brand} name={'brand'} onChange={inputHandle}/></label></div>
            <div><label>price: <input type='text' value={car.price} name={'price'} onChange={inputHandle}/></label></div>
            <div><label>year: <input type='text' value={car.year} name={'year'} onChange={inputHandle}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};