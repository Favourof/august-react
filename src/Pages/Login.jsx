import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate()
    const handleLogin = () => {
        if (name == "") return alert("name is Required")
        navigate(`/dashboard/profile/${name}/27`)


    }
    return (

        <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" id="" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
