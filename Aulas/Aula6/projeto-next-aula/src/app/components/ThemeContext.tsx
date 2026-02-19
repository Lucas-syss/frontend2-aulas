"use client"
import { createContext, useState } from 'react';

export const ThemeContext = createContext<{ theme: string; toggleTheme: (theme: string) => void } | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, toggleTheme] = useState('light');    
    return ( 
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}