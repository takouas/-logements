
import axios from "axios"
import { dataAnnonce } from "../actions/annoncesAction"
//************************** get annonce ******************************/
export function getAnnonceFromApi() {
    return (dispatch) => {
        axios.get("http://localhost:5000/annonces").then((res) => dispatch(dataAnnonce(res.data)));
    }
}
// //************************** post annonce ******************************/
export function postAnnonceToApi(el) {
    return () => {
        axios.post("http://localhost:5000/annonces", {
            id: el._id,
            prix: el.prix,
            nombreDePersonne: el.nombreDePersonne,
            gouvernorat: el.gouvernorat,
            typeDeBien: el.typeDeBien,
            periode: el.periode,
            image: el.image,
            description: el.description,
            telephoneAnnonce: el.telephoneAnnonce,
            emailAnnonce: el.emailAnnonce,
            emailUsers: el.emailUsers
        }).then((res) =>
            console.log(res.data))
        window.location.reload()
    }
}





// // ************************ edit annonce ******************************/
export function patchAnnonceToApi(annonce) {
    return () => {
        //console.log(annonce)
        axios.patch(`http://localhost:5000/annonces/${annonce._id}`, {
            "prix": annonce.prix,
            "nombreDePersonne": annonce.nombreDePersonne,
            "gouvernorat": annonce.gouvernorat,
            "typeDeBien": annonce.typeDeBien,
            "periode": annonce.periode,
            "nombreDePersoone": annonce.nombreDePersoone,
            // "image": annonce.image,
            "description": annonce.description,
            "emailAnnonce": annonce.emailAnnonce,
            "telephoneAnnonce": annonce.telephoneAnnonce

        }).then((res) =>
            console.log(res.data))
        window.location.reload()
    }
}
// // **************************delete annonce ******************************/

export function deleteAnnonceFromApi(el) {
    return () => {
        axios.delete(`http://localhost:5000/annonces/${el._id}`).then((res) =>
            console.log(res.data),
            window.location.reload()
        )

    }
}