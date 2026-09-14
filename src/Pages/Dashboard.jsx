import { Outlet } from "react-router-dom"
import { Sidebar } from "../Component/Sidebar"

export const Dashboard = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Sidebar />
            <div style={{ width: "70%", padding: "20px" }}>
                <Outlet />
            </div>

        </div>
    )
}
