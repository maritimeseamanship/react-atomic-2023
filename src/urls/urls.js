 const baseURL='https://jsonplaceholder.typicode.com';

const users ='/users'
 const endPoints={
    users:{
        base:users,
        byId:(id) =>`${users}/${id}`
    }

}
export{
    baseURL,
    endPoints
}