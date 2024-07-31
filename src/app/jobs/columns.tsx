"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { type ColumnDef } from "@tanstack/react-table";

export type Job = {
  id: string;
  title: string;
  recruiter: string;
  saleryRange: string;
  submitted: Date;
  companyName?: string;
  techstack?: string[];
  industry?: string;
  location?: string;
  remote?: "Office" | "Hybrid" | "Remote";
};

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "title",
    header: "Titel",
    cell: ({ row }) => <div className="font-bold">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "companyName",
    header: "Firma",
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
    accessorKey: "saleryRange",
    header: () => <div className="">Gehalt in €</div>,
  },
  {
    accessorKey: "industry",
    header: "Branche",
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
