"use client"
import { Button } from "@/components"
import { DataForm } from "@/components/DataForm"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { z } from "zod"
import { teacherInsertFields } from "./fields"

interface ComponentProps {}

const schema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    phone_number: z.string(),
    student_count: z.string(),
    avatar: z.any().optional(),
    description: z.string(),
})

export const TeacherInsertForm: FC<ComponentProps> = (props) => {
    const router = useRouter()
    return (
        <DataForm
            successMessage="Muvaffaqqiyatli amalga oshirildi"
            invalidateQueryKeys={["teacher"]}
            submitText="Tasdiqlash"
            formKey="login"
            title=""
            subtitle=""
            insertUrl="/teacher"
            redirect="/teachers"
            columns={3}
            className="max-w-full w-full grid-cols-3"
            fields={teacherInsertFields}
            schema={schema}
            body="FormData"
            files={["avatar"]}
            defaultButton={false}
        >
            <div className="absolute top-4 right-6 flex gap-6">
                <Button variant="success" type="submit">
                    Log in
                </Button>
                <Button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    variant="ghost"
                    onClick={() => {
                        router.back()
                    }}
                >
                    Bekor qilish
                </Button>
            </div>
        </DataForm>
    )
}
