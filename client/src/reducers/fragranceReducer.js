//import { SHOW_UPDATE_MODAL, SHOW_ALERT_MODAL, UPDATE_MODAL_CLOSE, ALERT_MODAL_CLOSE } from "../actions/types";

const initialState = {
    perfumes: [],
    modalShow: false,
    alertModalShow: false,
    currentPerfume: [],
    msg: ""
  }

  export default function(state = initialState, action) {
    switch (action.type) {
        
      default:
        return state;
    }
  }