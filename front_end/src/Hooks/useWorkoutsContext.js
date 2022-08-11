import { WorkoutsContext } from "../Context/WorkoutsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useWorkoutsContext must be used inside WorkoutsContextProvider')
    }

    return context
}