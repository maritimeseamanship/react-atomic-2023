import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {carValidator} from "../../../Validators/CarValidator";
import {joiResolver} from "@hookform/resolvers/joi";
const CarForm = ({setOnSave,carForUpdate,setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {isValid}, setValue} = useForm({
        mode:'all',
        resolver: joiResolver(carValidator)

    });

    useEffect(() => {
        if (carForUpdate)
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
        setValue('price', carForUpdate.price, {shouldValidate: true})
        setValue('year', carForUpdate.year, {shouldValidate: true})

    }, [carForUpdate])
    const save = (car) => {
        console.log(car);
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car),
            method: 'Post'
        }).then(value => {
            if (!value.ok) {
                throw Error(value.status + ' is not ok')
            }
            return value.json()
        })
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
            .catch(e => {
                console.log(e)
            })
        const update = (car) => {
            fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(car),
                method: 'PUT'
            }).then(value => value.json()).then(() => {
                setOnSave(prev => !prev)
                setCarForUpdate(null)
                reset()
            })
        }

        return (
            <div>

                <form onSubmit={handleSubmit(!carForUpdate? save : update)}>
                    <label><input type="text" placeholder={'brand'} {...register('brand',
                        {
                            required: true
                        })}/> </label>
                    <label><input type="text" placeholder={'price'} {...register('price', {
                        valueAsNumber: true
                       /* required: true,
                        min: {value:0, message: 'price must be gte 0'},
                        max: {value: 1000000, message: 'price must be lte 1000000'}*/
                    })}/> </label>
                    <label><input type="text" placeholder={'year'} {...register('year', {
                        valueAsNumber: true,
                        required: true
                     /*   min:{value:1990, message: 'year must be gte 1990'},
                        max: {value: new Date().getFullYear(), message: `year must be lte ${new Date().getFullYear()}`}*/
                    })}/> </label>
                    <button disabled={!isValid}>{!carForUpdate?'Save':'Update'}</button>
                </form>
            </div>
        )
    }
}
 /*const CarForm = ({setOnSave}) => {
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
};*/

export {CarForm};