import { Navbar } from '../Component/Navbar'
import { Outlet } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
