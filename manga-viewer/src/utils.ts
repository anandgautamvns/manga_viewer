import { ModuleReducerMap } from "./types";
import { Action, AnyAction, Reducer } from 'redux';

export const combineModuleReducers =
  <S = any, A extends Action = AnyAction>(
    initialState: S, ...reducersArr: Array<ModuleReducerMap<S, A>>
  ): Reducer<S, A> => {
    const finalReducers = reducersArr.reduce(
      (reducers, reducerItem) => ({ ...reducers, ...reducerItem }),
      {} as any as ModuleReducerMap<S, A>,
    );
    const finalKeys = Object.keys(finalReducers);
    return (state: S = initialState, action: A) => {
      const actionType = action.type;
      const reducer = finalReducers[actionType];
      if (finalKeys.indexOf(actionType) === -1) {
        return state;
      }
      return reducer(state, action);
    };
  };