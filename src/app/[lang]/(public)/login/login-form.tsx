"use client"
import * as z from "zod"

import { DataForm } from "@/components/DataForm"
import { Paragraph } from "@/components/typography/Paragraph"
import { setToken } from "@/lib/api"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { loginFields } from "./login-fields"

const loginSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
})

export function UserLoginForm() {
    const router = useRouter()
    return (
        <div className="w-1/2 mx-auto lg:m-0">
            <DataForm
                submitText="Log in"
                formKey="login"
                title="Tizimga kirish"
                subtitle="Qaytib kelganingizdan xursandmiz! Ma'lumotlaringizni kiriting."
                insertUrl="/auth/login"
                redirect="/"
                columns={1}
                fields={loginFields}
                schema={loginSchema}
                afterInsertFunction={setToken}
                invalidateQueryKeys={[""]}
                body="application/json"
            >
                <Link
                    className="mb-6 mt-8 font-bold text-sm text-success"
                    href="/forgot-password"
                >
                    Parolni unutdingizmi?
                </Link>
            </DataForm>
            <div className="flex gap-4 mt-8 items-center">
                <Paragraph className="m-0 text-sm">
                    Profilingiz yo'qmi?
                </Paragraph>
                <Link
                    className="font-bold text-sm text-success"
                    href="/sign-up"
                >
                    Ro'yxatdan o'tish
                </Link>
            </div>
        </div>
    )
}
