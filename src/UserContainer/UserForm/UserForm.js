import {useForm} from "react-hook-form";

import {userServices} from "../../userServices/userServices";
import {useContext, useState} from "react";
import {Context} from "../UserContainer";


const UserForm = () => {
  const [errors, setErrors] = useState(null)
  const {reset, register, handleSubmit} = useForm();
    const {setTrigger} = useContext(Context)
  const save = async(user) => {
      try{
          await userServices.create(user)
          setErrors(null)
          reset()
          setTrigger()
      } catch(e){
          setErrors(e.response.data)
      }

  }

  return(
      <div>
      <form onSubmit={handleSubmit(save)}>
            <div>New user</div>
            <div><label>:<input type="text" placeholder={'name'} {...register('name')}/></label></div>
            <div><label>:<input type="text" placeholder={'username'} {...register('username')}/></label></div>
            <div><label>:<input type="text" placeholder={'email'} {...register('email')}/></label></div>
            <div>Address:</div>
            <div><label>:<input type="text" placeholder={'street'} {...register('street')}/></label></div>
            <div><label>:<input type="text" placeholder={'city'} {...register('city')}/></label></div>
            <div>********</div>
            <div><label>:<input type="number" placeholder={'phone'} {...register('phone')}/></label></div>
            <div><label>:<input type="text" placeholder={'website'} {...register('website')}/></label></div>
            <button onClick={handleSubmit(save)}>Save</button>
        </form>

          {errors&&JSON.stringify(errors)}

      </div>
    );
};

export {UserForm} ;