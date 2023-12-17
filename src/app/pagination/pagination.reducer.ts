import { createFeature, createReducer, on } from "@ngrx/store";
import { PaginationState } from "./pagination.state";
import { IActions } from "../base/base.actions";

export const initialState: PaginationState<any> = {
    data: {
        currentPage: 1,
        totalPages: 1,
        totalElements: 10,
        results: []
    },
    loading: true,
    success: false,
    fail: false,
    error: null
};

export const paginationReducer = createFeature({
    name: "pagination",
    reducer: createReducer(
        initialState,
        on(IActions.getAllSuccess, (state, { data }) => ({ ...state, loading: false, success: true, fail: false, data: data })),
        on(IActions.getAllFailure, (state, { error }) => ({ ...state, loading: false, success: false, fail: true, error: error }))
    )
});

export const selectPaginationState = paginationReducer.selectPaginationState