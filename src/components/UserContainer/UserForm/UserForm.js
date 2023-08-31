import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
  const {register, reset, handleSubmit } = useForm()

 const save = (user) =>{
      fetch('https://jsonplaceholder.typicode.com/users', {
          headers:{'Content-type': 'application/json'},
          method: 'POST',
          body: JSON.stringify(user)
      })
          .then(value => value.json())
          .then(value => setUsers(prev =>[...prev, value]))
           reset()

  }


    return (
        <form onSubmit={handleSubmit(save)}>
            <div><label>: <input type="text" placeholder={'name'}  {...register('name')} /> </label></div>
            <div><label>: <input type="text" placeholder={'username'}  {...register('username')} /></label></div>
            <div><label>: <input type="text" placeholder={'email'}  {...register('email')} /></label></div>
            <div><label>: <input type="text" placeholder={'street'}  {...register('address.street')} /></label></div>
            <div><label>: <input type="text" placeholder={'city'}  {...register('address.city')}/></label></div>
            <div><label>: <input type="number" placeholder={'phone'}  {...register('phone')}/></label></div>
            <div><label>: <input type="text" placeholder={'website'}  {...register('website')}/></label></div>
            <button>Save</button>

        </form>
    )
}

export {UserForm} ;