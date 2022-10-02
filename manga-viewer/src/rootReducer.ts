import { combineReducers } from "redux";
import moduleReducer, {
  initialState as moduleState,
} from "./pages/states/reducer";

const rootReducer = combineReducers({
  module: moduleReducer,
});

export const initialState: AppState = {
  module: moduleState,
};

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
