export const statusTypes = [
    "tasdiqlangan",
    "tasdiqlanmagan",
    "ko'rilmoqda",
    "yangi",
    "bekor qilindi",
] as const
export interface User {
    hash: number
    id: number
    status: Status
    fullName: string
    createdAt: string
}
export interface EduCenter extends Omit<User, "fullName"> {
    name: string
}
export interface Teacher extends User {}
export interface LoginResponse {
    status: number
    data: {
        access_token: string
        refresh_token: string
    }
    message: "OK"
}

export type TableName = [string, string, string, string]
export type TranslationArray = [string, string, string, string]
export type Status = (typeof statusTypes)[number]
