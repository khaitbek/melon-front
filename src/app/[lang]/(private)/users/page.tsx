import { DataTable } from "@/components/routing/DataTable";
import users from "@/data/users";
import { User } from "@/types";
import { columns } from "./columns";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return users;
}

const TeacherDataPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable tableName={["Foydalanuvchilar", "Фойдаланувчилар", "Users", "Пользователи"]} tableKey="submittedUsers" columns={columns} data={data} />
    </div>
  )
}



export default TeacherDataPage;