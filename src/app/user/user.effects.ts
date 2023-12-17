import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Actions } from "@ngrx/effects";
import { UserService } from "./user.service";
import { IEffects } from "../base/base.effects";

@Injectable()
export class UserEffects extends IEffects<User> {

	public constructor(
		private actions$: Actions,
		private service: UserService) {

		super(actions$, service);
	}

}