import * as actionTypes from "./types";
import API from "../utils/API";

export const showUpdateModal = () => {
    return { type: actionTypes.SHOW_UPDATE_MODAL }
};

export const showAlertModal = () => {
    return { type: actionTypes.SHOW_ALERT_MODAL }
};

export const updateModalClose = () => {
    return { type: actionTypes.UPDATE_MODAL_CLOSE }
};

export const alertModalClose = () => {
    return { type: actionTypes.ALERT_MODAL_CLOSE }
};

export const setUserProfile = (userData) => {
    return { 
        type: actionTypes.PROFILE_DATA,
        userData: userData
     }
}

export const displayUserData = () => {
    return dispatch => {
        const userId = localStorage.getItem('payload');

        API.getUserData(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
            .catch(err => console.log(err))
    }
};