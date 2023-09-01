import {useForm} from "react-hook-form";

const PostForm = ({setPosts}) => {
    const{register, reset, handleSubmit} = useForm()
    const save = (post) =>{
        fetch(`https://jsonplaceholder.typicode.com/comments`, {
            headers:{'Content-type':'application/json'},
            method: 'POST',
            body: JSON.stringify(post)
        })
            .then(value => value.json())
            .then(value => setPosts(prev =>[...prev, value]))
        reset()

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div><label><input type="number" placeholder={"postId"} {...register("postId")}/></label></div>
            <div><label><input type="text" placeholder={"name"} {...register("name")}/></label></div>
            <div><label><input type="text" placeholder={"email"} {...register("email")}/></label></div>
            <div><label><input type="text" placeholder={"body"} {...register("body")}/></label></div>
            <button onClick={handleSubmit(save)}>Save</button>

        </form>
    );
};

export {PostForm};
