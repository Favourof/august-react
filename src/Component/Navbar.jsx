import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div style={{ width: "30%", margin: "auto", padding: "2px", border: "thin solid black", borderRadius: "20px", backgroundColor: "black" }}>
            <ul style={{ display: "flex", listStyleType: "none", justifyContent: "space-evenly", color: "white", cursor: "pointer" }}>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li> <Link to={"/contact"}>Contact</Link></li>
                <li> <Link to={"/dashboard"}>dashboard</Link></li>
                <li> <Link to={"/login"}>Login</Link></li>

            </ul>
        </div>
    )
}
