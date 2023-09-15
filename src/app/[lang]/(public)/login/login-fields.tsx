import { InputGroup } from "@/components/DataForm"

export const loginFields: InputGroup[] = [
    {
        label: "Username",
        name: "username",
        placeholder: "Username",
        autoComplete: "username",
    },
    {
        label: "Parol",
        type: "password",
        name: "password",
        placeholder: "••••••••",
        autoComplete: "current-password",
    },
]
