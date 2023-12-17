import { IState } from "./base.state";
import { createFeature, createReducer, on } from "@ngrx/store";
import { IActions } from "./base.actions";

export const initialState: IState<any> = {
    object: null,
    loading: true,
    success: false,
    fail: false,
    error: null,
};

export const baseReducer = createFeature({
    name: "base",
    reducer: createReducer(
        initialState,
        on(IActions.getSuccess, (state, { data }) => ({ ...state, loading: false, success: true, fail: false, object: data })),
        on(IActions.getFailure, (state, { error }) => ({ ...state, loading: false, success: false, fail: true, error: error })),
    )
})

export const selectBaseState = baseReducer.selectBaseState