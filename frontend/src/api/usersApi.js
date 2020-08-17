
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
        axios.post("http://localhost:5000/users", {
            _id: el._id,
            nom: el.nom,
            prenom: el.prenom,
            role: el.role,
            motDePasse: el.motDePasse,
            telephone: el.telephone,
            email: el.email

        }).then((res) =>
            console.log(res.data))
        window.location.reload()
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