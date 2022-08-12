import { UsersContext } from "../Context/UsersContext"
import { useContext } from "react"

export const useUsersContext = () => {
    const context = useContext(UsersContext)

    if(!context){
        throw Error('useUsersContext must be used inside UsersContextProvider')
    }

    return context
}