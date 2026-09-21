import { useParams } from "react-router-dom"


export const Profile = () => {
    const param = useParams()
    console.log(param);

    return (
        <div>
            <h1>Profile</h1>
            <p>name: {param.name}</p>
            <p>Age: {param.age}</p>
        </div>
    )
}
