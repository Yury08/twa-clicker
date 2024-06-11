import { makeAutoObservable } from "mobx";


class UserStore {
    private _isAuth: boolean;
    private _username: string;
    constructor() {
        this._isAuth = false;
        this._username = "";
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean): void {
        this._isAuth = bool;
    }

    setUsername(username: string): void {
        this._username = username;
    }

    get isAuth() {
        return this._isAuth;
    }

    get username() {
        return this._username;
    }
}

export default new UserStore();