import UserActionsTypes from "./action-types";

export const loginUser = (payload) => ({
    // o type é obrigatorio para dizer qual action estamos alterando
    // o payload é opcional
    type: UserActionsTypes.LOGIN,
    payload: payload
  })

export const logoutUser = () => ({
    type: UserActionsTypes.LOGOUT,
  })