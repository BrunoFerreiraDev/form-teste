import { createContext, useState } from "react";

export const statecontext = createContext()

export function StateProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [React, setReact] = useState(false)
    const [Vue, setVue] = useState(false)
    const [Angular, setAngular] = useState(false)


    return (
        <statecontext.Provider value={{ quantidade, setQuantidade,  React, setReact, Vue, setVue, Angular, setAngular}} >
            {children}
        </ statecontext.Provider>
    )
}
