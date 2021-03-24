import { isEnvDevelopment } from './../utils/env';
import { IModule } from './../interfaces/module';
import modules from '../modules';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
console.info(process.env);
const sagaMiddleware = createSagaMiddleware();
const rootReducer =  combineReducers(modules.reduce((reducer, module: IModule) => ({ ...reducer, [module.id]: module.reduer }), {}));
function* rootSaga() {
  yield all(modules.map(module => module.saga()));
}
// @ts-ignore
const composeEnhancers = isEnvDevelopment()? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;