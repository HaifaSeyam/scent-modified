import { SHOW_UPDATE_MODAL, SHOW_ALERT_MODAL, UPDATE_MODAL_CLOSE, ALERT_MODAL_CLOSE } from "../actions/types";

const initialState = {
    updateModalShow: false,
    alertModalShow: false,
    user: ""
  }

  export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_UPDATE_MODAL:
            return {
                ...state,
                updateModalShow: true
            };
        case SHOW_ALERT_MODAL:
            return {
                ...state,
                alertModalShow: true
            };
        case UPDATE_MODAL_CLOSE:
            return {
                ...state,
                updateModalShow: false
            };
        case ALERT_MODAL_CLOSE:
            return {
                ...state,
                alertModalShow: false
            };
      default:
        return state;
    }
  }