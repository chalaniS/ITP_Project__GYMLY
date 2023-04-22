import { createContext, useReducer } from "react"

export const PromosContext = createContext()

export const promosReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROMOS':
            return {
                promos: action.payload
            }
        case 'CREATE_PROMO':
            return {
                promos: [action.payload, ...state.promos]
            }
        case 'DELETE_PROMO':
            return {
                promos: state.promos.filter((p) => p._id != action.payload._id)
              }
        default:
            return state
    }
}

export const PromosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(promosReducer, {
        promos: null
    })

    return (
        <PromosContext.Provider value={{...state, dispatch}}>
            { children }
        </PromosContext.Provider>
    )
}