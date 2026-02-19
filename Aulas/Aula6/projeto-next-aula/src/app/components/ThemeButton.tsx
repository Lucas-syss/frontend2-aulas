"use client";

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeContext is not defined");
    }

    const { theme, toggleTheme } = themeContext;
    
    const toggleThemeHandler = () => {
        console.log("Current theme:", theme);
        toggleTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-200'}`}
            onClick={toggleThemeHandler}
        >
            Toggle Theme
        </button>
    );
}

export default ThemeButton;