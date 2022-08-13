import { createStore, appylMiddleware } from "redux";
import { composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers"

const store = createStore(
    rootReducer,
    composeWithDevTools(appylMiddleware(thunk))
);
export default store;
