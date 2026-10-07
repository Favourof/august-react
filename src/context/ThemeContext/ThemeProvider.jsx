import { useState } from 'react'
import { ThemeContext } from "./ThemeContext.js"

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }


    const value = {
        theme, toggleTheme
    }
    return (
        <ThemeContext value={value}>
            {children}
        </ThemeContext>
    )
}
