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