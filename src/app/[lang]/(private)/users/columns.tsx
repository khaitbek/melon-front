"use client"

import { TableCellStatus } from "@/components/routing/DataTable"
import { User } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "hash",
    header: "#",
  },
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "fullName",
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