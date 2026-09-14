import { Link } from "react-router-dom"


export const Sidebar = () => {
    return (
        <div>
            <ul style={{ padding: "20px", width: "100%", backgroundColor: "black", color: "white", height: "100vh" }}>
                <li><Link to={"profile"}>Profile</Link></li>
                <li><Link to={"settings"}>Settings</Link></li>
                <li><Link to={"logs"}>Logs</Link></li>
            </ul>
        </div>
    )
}
