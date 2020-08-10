import { combineReducers } from "redux";
//**********************************Annonces*********************************************/
const listAnnonce = []
function reducerAnnonces(state = listAnnonce, action) {
    if (action.type === "affichageListAnnonces") {
        return action.data

    }
    return state
}
//**********************************users*********************************************/

const listUsers = []
function reducerUsers(state = listUsers, action) {
    if (action.type === "affichageListUsers") {
        return action.data
    }
    return state
}




//**********************************combineReducers***********************************************************/


export default combineReducers({
    stateAnnonces: reducerAnnonces,
    stateUsers: reducerUsers
});