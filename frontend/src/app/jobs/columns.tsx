"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";

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

// Header Component
const Header = ({ children }: { children: React.ReactNode }) => (
  <div className="text-black">{children}</div>
);

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: "title",
    header: () => <Header>Titel</Header>,
    cell: ({ row }) => <div className="font-bold">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "companyName",
    header: () => <Header>Firma</Header>,
  },
  {
    accessorKey: "recruiter",
    header: () => <Header>Recruiter</Header>,
  },
  {
    accessorKey: "techstack",
    header: () => <Header>Tech Stack</Header>,
    cell: ({ row }) => (
      <div>{row.getValue<string[]>("techstack").join(", ")}</div>
    ),
  },
  {
    accessorKey: "saleryRange",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "industry",
    header: () => <Header>Branche</Header>,
  },
  {
    accessorKey: "location",
    header: () => <Header>Ort</Header>,
  },
  {
    accessorKey: "remote",
    header: () => <Header>Remote?</Header>,
  },
];
