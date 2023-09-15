"use client"
import * as z from "zod"

import { DataForm } from "@/components/DataForm"
import { Paragraph } from "@/components/typography/Paragraph"
import { setToken } from "@/lib/api"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SignupFields } from "./signup-fields"

const signupSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters",
    }),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    email: z.string().optional(),
    phone: z.string(),
    info:z.string()
})

export function UserSignupForm() {
    const router = useRouter()
    return (
        <div className="w-1/2 mx-auto lg:m-0">
            <DataForm
                submitText="Ro'yxatdan o'tish"
                formKey="signup"
                title="Ro'yxatdan o'tish"
                subtitle="Bepul sinov darslari sizni kutmoqda!"
                insertUrl="/auth/signup"
                redirect="/"
                columns={1}
                fields={SignupFields}
                schema={signupSchema}
                afterInsertFunction={setToken}
                invalidateQueryKeys={[""]}
                body="application/json"
                successMessage="Ro'yxatdan o'tdingiz! Biroz kuting!"
                errorMessage="Xatolik yuz berdi! Formani to'g'ri to'ldirganligingizni tekshiring"
            />

            <div className="flex gap-4 mt-8 items-center">
                <Paragraph className="m-0 text-sm">
                    Profilingiz bormi?
                </Paragraph>
                <Link className="font-bold text-sm text-success" href="/kogin">
                    Tizimga kirish
                </Link>
            </div>
        </div>
    )
}
