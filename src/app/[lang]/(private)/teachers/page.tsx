import { DataTable } from "@/components/routing/DataTable";
import teachers from "@/data/teachers";
import { Teacher } from "@/types";
import { columns } from "./columns";

async function getData(): Promise<Teacher[]> {
  // Fetch data from your API here.
  return teachers;
}

const TeacherDataPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable tableName={["Ustozlar", "Устозлар", "Teachers", "Учителя"]} tableKey="teachers" columns={columns} data={data} />
    </div>
  )
}



export default TeacherDataPage;