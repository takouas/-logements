
import axios from "axios"
import { dataUsers } from "../actions/usersAction"
// //************************** get users ******************************/
export function getUsersFromApi() {
    return (dispatch) => {
        axios.get("http://localhost:5000/users").then((res) => dispatch(dataUsers(res.data)));
    }
}
// //************************** post users ******************************/

export function postUsersToApi(el) {
    return () => {
        axios.post("http://localhost:5000/users/register", el).then((res) =>
            console.log(res.data))
        window.location.reload()
    }
}


export function postUsersLoginToApi(el) {
    console.log("gklj")
    return () => {
        axios.post("http://localhost:5000/users/login",
            el
        ).then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data)
            window.location.reload()
            console.log(el.motDePasse)
        }
        )


    }
}
// // **************************delete users ******************************/

export function deleteUsersFromApi(el) {
    return () => {
        axios.delete(`http://localhost:5000/users/${el._id}`).then((res) =>
            console.log(res.data),
            window.location.reload()
        )

    }
}
// // ************************ edit user ******************************/
export function patchProfileUserToApi(el) {
    return () => {
        console.log(el)
        axios.patch(`http://localhost:5000/users/profile/${el._id}`, {
         
            nom:el.nom,
            prenom:el.prenom,
            telephone:el.telephone
        

        }).then((res) =>
            console.log(res.data))
   
    }
}
export function patchPassUserToApi(el) {
    return () => {
       
        axios.patch(`http://localhost:5000/users/pass/${el._id}`, {
            "motDePasse":el.motDePasse,
          

        }).then((res) =>
            console.log(res.data))
        window.location.reload()
    }
}