import * as actionTypes from "../actions/types";

const initialState = {
    perfumes: [],
    modalShow: false,
    alertModalShow: false,
    currentPerfume: [],
    msg: ""
  }

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FRAGRANCE_DATA:
      return {
        ...state,
        perfumes: action.fragrance
      };
    case actionTypes.MODAL_CLOSE:
      return {
        ...state,
        modalShow: false,
      }
    case actionTypes.ALERT_MODAL_CLOSE:
      return {
        ...state,
        alertModalShow: false
      }
    case actionTypes.ADD_TO_FAVORITE:
      return {
        ...state,
        modalShow: action.modalShow,
        currentPerfume: action.currentPerfume,
        alertModalShow: action.alertModalShow,
        msg: action.msg
      }
    default:
      return state;
  }
}