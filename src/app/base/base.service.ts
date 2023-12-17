import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

export abstract class IService<T> {

    get apiUrl(): string {
        return environment.apiUrl + this.entityName;
    }

    constructor(protected entityName: string, protected http: HttpClient) {
        
    }

    public getAll(data: any): Observable<T[]> {
        return this.http.get<any>(this.apiUrl);
    }

    public abstract get(data: any): Observable<any>;

}