import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext/ThemeContext'
import { MdOutlineWbSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { Button } from '@base-ui/react'

export const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div style={{ width: "30%", margin: "auto", padding: "2px", border: "thin solid black", borderRadius: "20px", backgroundColor: "black" }}>
            <ul style={{ display: "flex", listStyleType: "none", justifyContent: "space-evenly", color: "white", cursor: "pointer" }}>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li> <Link to={"/contact"}>Contact</Link></li>
                <li> <Link to={"/dashboard"}>dashboard</Link></li>
                <li> <Link to={"/login"}>Login</Link></li>
                <li><Button onClick={() => toggleTheme()}>{theme === "light" ? <IoIosMoon /> : <MdOutlineWbSunny />}</Button></li>

            </ul>
        </div>
    )
}
