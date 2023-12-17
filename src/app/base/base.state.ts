export interface ICommonState {
    loading: boolean;
    success: boolean;
    fail: boolean;
    error: any;
}

export interface IState<T> extends ICommonState {
    object: T;
}