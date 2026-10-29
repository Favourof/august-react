import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext/ThemeContext'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { Button } from '@base-ui/react'
import { AuthContext } from '../context/AuthContext/AuthContext';

export const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { isAuthenticated, logOut } = useContext(AuthContext)
    return (
        <div className='bg-foreground' style={{ width: "30%", margin: "auto", padding: "2px", border: "thin solid black", borderRadius: "20px", }}>
            <ul style={{ display: "flex", listStyleType: "none", justifyContent: "space-evenly", color: "white", cursor: "pointer" }}>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li> <Link to={"/contact"}>Contact</Link></li>
                {isAuthenticated && <li> <Link to={"/dashboard"}>dashboard</Link></li>}
                {isAuthenticated ? <li> <button onClick={() => logOut()}>Logout</button></li> : <ul> <li> <Link to={"/register"}>Register</Link></li>
                    <li> <Link to={"/login"}>Login</Link></li>
                </ul>}

                <li><Button onClick={() => toggleTheme()}>{theme === "light" ? <IoIosMoon /> : <MdOutlineWbSunny />}</Button></li>

            </ul>
        </div>
    )
}
