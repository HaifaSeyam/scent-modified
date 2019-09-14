import { SHOW_UPDATE_MODAL, SHOW_ALERT_MODAL, UPDATE_MODAL_CLOSE, ALERT_MODAL_CLOSE } from "./types";

export const showUpdateModal = () => {
    return { type: SHOW_UPDATE_MODAL }
};

export const showAlertModal = () => {
    return { type: SHOW_ALERT_MODAL }
};

export const updateModalClose = () => {
    return { type: UPDATE_MODAL_CLOSE }
};

export const alertModalClose = () => {
    return { type: ALERT_MODAL_CLOSE }
};