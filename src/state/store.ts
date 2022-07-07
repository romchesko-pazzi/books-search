import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {searchReducer} from "./searchReducer";

export type RootStateType = ReturnType<typeof store.getState>;

export const rootReducer = combineReducers({
    search: searchReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));