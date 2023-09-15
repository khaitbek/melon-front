"use client";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { capitalize, cn } from "@/lib/utils";
import { Status, TableName, statusTypes } from "@/types";
import { useState } from "react";
import { Back } from "../Back";
import { HeadingTwo } from "../typography";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  tableKey: string;
  searchFunction?: Function;
  tableName: TableName;
}


export function DataTable<TData, TValue>({
  columns,
  data,
  tableName,
  tableKey,
  searchFunction
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  });

  return (
    <>
      <div className="flex items-center mb-8 gap-8">
        <Back />
        <TableTitle className="mb-0" tableName={tableName} />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex gap-6 justify-between items-center">
          
      </div>
    </>
  )
}

export const TableTitle = ({ tableName, className }: { tableName: TableName, className?: string; }) => {
  return (
    <HeadingTwo className={cn("mb-11 text-lg md:text-xl lg:text-2xl", className)}>
      {tableName[0]}
    </HeadingTwo>
  )
}

export const TableCellStatus = ({ status }: { status: Status }) => {
  const cellClassNames = {
    [statusTypes[0]]: "text-[#359742] bg-[#D9F2DD]",
    [statusTypes[1]]: "text-[#FF6666] bg-[#FFE5E5]",
    [statusTypes[2]]: "text-[#359742] bg-[#FFF5CC]",
    [statusTypes[3]]: "text-[#0E3F41] bg-[#EBF2FF]",
    [statusTypes[4]]: "text-[#359742] bg-[#FFF5CC]",
  }
  return (
    <p className={cn("px-2 py-3 rounded-[7px]", cellClassNames[status])}>
      {capitalize(status)}
    </p>
  )
}