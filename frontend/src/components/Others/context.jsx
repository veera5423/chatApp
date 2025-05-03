import { createContext, useContext, useState } from "react";

const Modecontext = createContext();

export const useMode = () => useContext(Modecontext);

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    

    return (
        <Modecontext.Provider value={{ mode }}>
            {children}
        </Modecontext.Provider>
    );
};
