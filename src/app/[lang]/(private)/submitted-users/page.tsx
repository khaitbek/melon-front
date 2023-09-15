import { DataTable } from "@/components/routing/DataTable";
import { submittedUsers } from "@/data/users";
import { User } from "@/types";
import { columns } from "./columns";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return submittedUsers;
}

const TeacherDataPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable tableName={["Tasdiqlangan foydalanuvchilar", "Тасдиқланган фойдаланувчилар", "Submitted users", "Представленные пользователи"]} tableKey="submittedUsers" columns={columns} data={data} />
    </div>
  )
}



export default TeacherDataPage;