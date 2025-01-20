import React, { useContext } from "react";
const ThemeContext = React.createContext({
    themeMode: "white",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}