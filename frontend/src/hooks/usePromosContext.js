import { PromosContext } from "../context/PromoContext"
import { useContext } from "react"

export const usePromosContext = () => {
    const context = useContext(PromosContext)

    if (!context) {
        throw Error('usePromosContext must be used inside an PromosContextProvider')
    }

    return context
}