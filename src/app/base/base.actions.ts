import { createAction, props } from "@ngrx/store";

export namespace IActions {

    export const createActionTypes = (module: string) => ({

        GET_ALL: `[${module}] Get All`,
        GET_ALL_SUCCESS: `[${module}] Get All Success`,
        GET_ALL_FAILURE: `[${module}] Get All Failure`,

        GET: `[${module}] Get`,
        GET_SUCCESS: `[${module}] Get Success`,
        GET_FAILURE: `[${module}] Get Failure`,

    });

    const actionTypes = createActionTypes('');

    export const getAll = createAction(actionTypes.GET_ALL, props<{ module: string, data: any }>());
    export const getAllSuccess = createAction(actionTypes.GET_ALL_SUCCESS, props<{ module: string; data: any }>());
    export const getAllFailure = createAction(actionTypes.GET_ALL_FAILURE, props<{ module: string; error: any }>());

    export const get = createAction(actionTypes.GET, props<{ module: string, data: any }>());
    export const getSuccess = createAction(actionTypes.GET_SUCCESS, props<{ module: string; data: any }>());
    export const getFailure = createAction(actionTypes.GET_FAILURE, props<{ module: string; error: any }>());
    
}