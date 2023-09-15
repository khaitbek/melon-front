"use client";

import { TableCellStatus } from "@/components/routing/DataTable";
import { EduCenter, Teacher } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<EduCenter>[] = [
  {
    accessorKey: "hash",
    header: "#",
  },
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "name",
    header: "Ism familiyasi"
  },
  {
    accessorKey: "createdAt",
    header: "Yaratilgan sanasi"
  },
  {
    accessorKey: "status",
    header: "Holat",
    cell(props) {
      return (
        <TableCellStatus status={props.row.original.status} />
      )
    },
  }
]