// aqui fica a base para TUDO DO REDUX

import { createStore, applyMiddleware } from "redux";
// loga informaçoes da action no console do navegador
import logger from "redux-logger";

import rootReducer from './root-reducer'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store