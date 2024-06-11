export interface IUser {
    isAuth: boolean
    username: string

    setUsername(username: string): void
    setIsAuth(bool: boolean): void
}