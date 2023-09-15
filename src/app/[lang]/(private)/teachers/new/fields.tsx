import { InputGroup } from "@/components/DataForm"

export const teacherInsertFields: InputGroup[] = [
    {
        label: "Ismi",
        name: "first_name",
        autoComplete: "first_name",
    },
    {
        label: "Familiyasi",
        name: "last_name",
        autoComplete: "last_name",
    },
    {
        label: "Ma'lumot",
        name: "description",
        autoComplete: "description",
    },
    {
        label: "Telefon raqami",
        name: "phone_number",
        autoComplete: "phone_number",
        type: "tel",
    },
    {
        label: "O'quvchilar soni",
        name: "student_count",
        type: "number",
    },
    {
        label: "Rasmi",
        name: "avatar",
        type: "file",
        className: "col-span-2",
    },
]
