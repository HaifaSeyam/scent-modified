import * as actionTypes from "../actions/types";

const initialState = {
    updateModalShow: false,
    alertModalShow: false,
    user: ""
  }

  export default function(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_UPDATE_MODAL:
            return {
                ...state,
                updateModalShow: true
            };
        case actionTypes.SHOW_ALERT_MODAL:
            return {
                ...state,
                alertModalShow: true
            };
        case actionTypes.UPDATE_MODAL_CLOSE:
            return {
                ...state,
                updateModalShow: false
            };
        case actionTypes.ALERT_MODAL_CLOSE:
            return {
                ...state,
                alertModalShow: false
            };
        case actionTypes.PROFILE_DATA:
            return {
                ...state,
                user: action.user
            };
      default:
        return state;
    }
  }