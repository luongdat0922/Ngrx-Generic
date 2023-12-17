import { ICommonState } from "../base/base.state";

export interface PaginationState<T> extends ICommonState {
    data: IList<T>;
}

export interface IList<T> {
    currentPage: number;
    totalPages: number;
    totalElements: number;
    results: T[];
}