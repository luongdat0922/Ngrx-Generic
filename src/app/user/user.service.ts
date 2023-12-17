import { Injectable } from "@angular/core";
import { IService } from "../base/base.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService extends IService<User> {

    public override get(username: string): Observable<User> {
        return this.http.get<any>(this.apiUrl + `/lak`);
    }

    constructor(protected override http: HttpClient) {
        super('users', http);
    }

}