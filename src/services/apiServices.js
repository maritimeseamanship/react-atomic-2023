import axios from "axios";
import {baseURL, endPoints} from "../urls/urls";

/*export const apiServices = {
    handleSubmitAxios: (data)  =>
        axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then(data => console.log(data))
}*/

const apiServices  = axios.create({baseURL:baseURL})

/*export const apiServices = {
    handleSubmitAxios: (data)  =>
        instance.post(endPoints.USERS, data)
            .then(data => console.log(data))

}*/
export {apiServices} ;