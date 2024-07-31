"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { type ColumnDef } from "@tanstack/react-table";

export type Job = {
  id: string;
  title: string;
  recruiter: string;
  techstack?: string[];
  salery: string;
  location?: string;
  submitted: Date;
  remote: "Office" | "Hybrid" | "Remote";
};

export const columns: ColumnDef<Job>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Alle auswählen"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Zeile auswählen"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Titel",
  },
  {
    accessorKey: "recruiter",
    header: "Recruiter",
  },
  {
    accessorKey: "techstack",
    header: "Tech Stack",
  },
  {
    accessorKey: "salery",
    header: "Gehalt",
  },
  {
    accessorKey: "location",
    header: "Ort",
  },
  {
    accessorKey: "remote",
    header: "Remote?",
  },
];
