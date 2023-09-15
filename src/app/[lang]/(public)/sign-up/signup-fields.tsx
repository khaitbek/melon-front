import { InputGroup } from "@/components/DataForm"

export const SignupFields: InputGroup[] = [
    {
        label: "Ism",
        name: "firstname",
        placeholder: "Ism",
        autoComplete: "firstname",
    },
    {
        label: "Familiya",
        name: "lastname",
        placeholder: "Familiya",
        autoComplete: "lastname",
    },
    {
        label: "Email",
        type: "email",
        name: "email",
        placeholder: "Email",
        autoComplete: "email",
    },
    {
        label: "Telefon raqam",
        type: "tel",
        name: "phone",
        placeholder: "998 XX XXX-XX-XX",
        autoComplete: "phone",
    },
    {
        label: "Ma'lumot",
        type: "text",
        name: "info",
        placeholder: "O'zingiz haqingizda qisqacha ma'lumot",
        autoComplete: "info",
    },
    {
        label: "Username*",
        name: "username",
        placeholder: "Username",
        autoComplete: "username",
    },
    {
        label: "Parol*",
        type: "password",
        name: "password",
        placeholder: "••••••••",
        autoComplete: "current-password",
    },
]
