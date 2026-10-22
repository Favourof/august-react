import { useEffect, useState } from 'react'
import { ThemeContext } from "./ThemeContext.js"

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme == "dark")
    }, [theme])


    const value = {
        theme, toggleTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
