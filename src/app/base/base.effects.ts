import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IService } from "./base.service";
import { catchError, map, of, switchMap } from "rxjs";
import { IActions } from "./base.actions";

@Injectable()
export class IEffects<T> {

    constructor(
        private _actions$: Actions,
        private _service: IService<T>
    ) {

    }

    getAll$ = createEffect(() =>
        this._actions$.pipe(
            ofType(IActions.getAll),
            switchMap(action =>
                this._service.getAll(action.data).pipe(
                    map(data => IActions.getAllSuccess({ module: action.module, data: data })),
                    catchError(error => of(IActions.getAllFailure({ module: action.module, error: error })))
                )
            )
        )
    );

    get = createEffect(() => this._actions$.pipe(
        ofType(IActions.get),
        switchMap(action => this._service.get(action.data)
            .pipe(
                map(data => IActions.getSuccess({ module: action.module, data: data })),
                catchError(error => of(IActions.getFailure({ module: action.module, error: error })))
            )
        )
    ));

}