import {apiServices} from "../services/apiServices";
import {endPoints as urls} from "../urls/urls";

const userServices = {
    getAll:() => apiServices.get(urls.users.base),
    create:(user) => apiServices.post(urls.users.base, user),

}
export{userServices}