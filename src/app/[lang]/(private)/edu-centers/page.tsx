import { DataTable } from "@/components/routing/DataTable";
import eduCenters from "@/data/edu-centers";
import { EduCenter } from "@/types";
import { columns } from "./columns";

async function getData(): Promise<EduCenter[]> {
  // Fetch data from your API here.
  return eduCenters;
}

const TeacherDataPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable tableName={["O’quv markazlari", "Ўқув марказлари", "Schools", "Школы"]} tableKey="eduCenters" columns={columns} data={data} />
    </div>
  )
}



export default TeacherDataPage;