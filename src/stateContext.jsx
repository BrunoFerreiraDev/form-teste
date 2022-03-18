import { createContext, useState } from "react";

export const stateContext = createContext()

export function StateProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [React, setReact] = useState(false)
    const [Vue, setVue] = useState(false)
    const [Angular, setAngular] = useState(false)


    return (
        <stateContext.Provider value={{ quantidade, setQuantidade,  React, setReact, Vue, setVue, Angular, setAngular}} >
            {children}
        </ stateContext.Provider>
    )
}

export function StateComsumer({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [React, setReact] = useState(false)
    const [Vue, setVue] = useState(false)
    const [Angular, setAngular] = useState(false)


    return (
        <stateContext.Consumer value={{ quantidade, setQuantidade,  React, setReact, Vue, setVue, Angular, setAngular}} >
            {children}
        </ stateContext.Consumer>
    )
}
