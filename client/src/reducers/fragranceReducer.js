import * as actionTypes from "../actions/types";

const initialState = {
    perfumes: [],
    modalShow: false,
    alertModalShow: false,
    currentPerfume: [],
    msg: ""
  }

  export default function(state = initialState, action) {
    switch (action.type) {
      case actionTypes.FRAGRANCE_DATA:
            return {
                ...state,
                perfumes: action.fragrance
            };
        
      default:
        return state;
    }
  }