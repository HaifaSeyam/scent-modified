import * as actionTypes from "./types";
import API from "../utils/API";

export const setFragrance = (fragrance) => {
    return { 
        type: actionTypes.FRAGRANCE_DATA,
        fragrance: fragrance
     }
}

export const displayFragrnace = () => {
    return dispatch => {
        API.getPerfume().then(response => {
                dispatch(setFragrance(response.data));
            })
            .catch(err => console.log(err))
    }
};

export const modalClose = () => {
    return { type: actionTypes.MODAL_CLOSE }
}

export const alertModalClose = () => {
    return { type: actionTypes.ALERT_MODAL_CLOSE }
}

export const handleAddToFavorites = (prod) => {
    console.log("PROD", prod)
    const isAuth = localStorage.getItem('jwtToken');
    if (isAuth) {
        return { 
            type: actionTypes.ADD_TO_FAVORITE,
            modalShow: true,
            currentPerfume: prod
         } 
    } else {
        return { 
            type: actionTypes.ADD_TO_FAVORITE,
            alertModalShow: true,
            msg: "You're not logged in. Click register to get started now. Already a member? Sign in."
         }
    }
    
}