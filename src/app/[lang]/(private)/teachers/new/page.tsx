import { AdminLayoutContainer } from "@/components/routing/AdminLayoutContainer"
import { FC } from "react"
import { TeacherInsertForm } from "./teacher-insert-form"

interface PageProps {}

const Page: FC<PageProps> = (props) => {
    return (
        <AdminLayoutContainer title="Ustoz">
            <div className="flex items-center justify-start mt-9">
                <TeacherInsertForm />
            </div>
        </AdminLayoutContainer>
    )
}
export default Page
