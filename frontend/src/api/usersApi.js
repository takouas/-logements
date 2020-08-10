
import axios from "axios"
import {dataUsers} from "../actions/usersAction"

export function getUsersFromApi(){
    return(dispatch)=>{
        axios.get("http://localhost:4000/users").then((res)=>dispatch(dataUsers(res.data)));
    }
}
