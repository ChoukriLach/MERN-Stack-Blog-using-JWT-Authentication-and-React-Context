import {createContext,useReducer,useEffect} from 'react'


export const UsersContext = createContext()

export const usersReducer = (state,action) => {
     switch(action.type) {
         case 'LOGIN':
            return {
                user : action.payload
            }
         case 'LOGOUT':
            return {
                user : null
            }
         default :
            return state
     }
}

export const UsersContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(usersReducer,{
        user:null
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            dispatch({type:'LOGIN',payload:user})
        }
    },[])

    return (
        <UsersContext.Provider value={{...state,dispatch}}>
            {children}
        </UsersContext.Provider>
    )
}