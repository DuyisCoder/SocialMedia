import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"
const INITIAL_STATE={
    user:{
        _id:"64a18b5777435ebff34e7b77",
        username:"my",
        email:"my@gmail.com",
        profilePicture:"",
        coverPicture:"",
        isAdmin:false,
        followers:[],
        followings:[],
    },
    // user1:{
    //     _id:"64a190b10a80a54da75b444b",
    //     username:"duy1231",
    //      email:"duy122@gmail.com",
    //      profilePicture:"person/Image1.png",
    //     coverPicture:"",
    //      isAdmin:false,
    //      followers:[],
    //      followings:[],
    // },
    isFetching:false,
    error:false,
}
// :{
//     _id:"64a190b10a80a54da75b444b",
//     username:"duy1231",
//     email:"duy122@gmail.com",
//     profilePicture:person/Image1.png"
//     coverPicture:"",
//     isAdmin:false,
//     followers:[],
//     followings:[],
// }
export const AuthContext=createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state,dispatch]= useReducer(AuthReducer,INITIAL_STATE);
    return (
        <AuthContext.Provider 
            value={{
                user:state.user,
                isFetching:state.isFetching,
                error:state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}