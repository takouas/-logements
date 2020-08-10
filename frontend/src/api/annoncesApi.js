
import axios from "axios"
import {dataAnnonce} from "../actions/annoncesAction"
//************************** get annonce ******************************/
export function getAnnonceFromApi(){
    return (dispatch)=>{
        axios.get("http://localhost:4000/annonces").then((res) => dispatch(dataAnnonce(res.data)));
    }
}
// //************************** post annonce ******************************/
// export function postAnnonceToApi(data){
//     return()=>{
//         axios.post("http://localhost:4000/annonces").then((res) =>
//         console.log(res.data))
//     }
// }
// // ************************ edit annonce ******************************/
// export function patchAnnonceToApi(data){
// return()=>{
// axios.patch(`http://localhost:4000/annonces${id}`,{}).then((res) =>
// console.log(res.data))
// }
// }
// // **************************delete annonce ******************************/

// export function deleteAnnonceFromApi(){
//     return()=>{
//         axios.delete(`http://localhost:4000/annonces${id}`).then((res) =>
//         console.log(res.data))
//     }
// }