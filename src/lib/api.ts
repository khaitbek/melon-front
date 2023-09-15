"use server"
import { LoginResponse } from "@/types"
import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"

const axiosClient = axios.create({
    baseURL: "http://207.154.221.44:3000",
    headers: {
        Authorization: `Bearer ${cookies().get("melonAccessToken")?.value}`,
    },
})

export async function makeMutation(
    url: string,
    data: any,
    config?: AxiosRequestConfig<any> | undefined
) {
    return (await axiosClient.post(url, data, config)).data
}
export async function setToken(response: LoginResponse) {
    cookies().set("melonAccessToken", response.data.access_token)
    cookies().set("melonRefreshToken", response.data.refresh_token)
}
