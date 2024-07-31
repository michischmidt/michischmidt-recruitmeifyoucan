import { columns, type Job } from "./jobs/columns";
import { DataTable } from "./jobs/data-table";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#0B65C2] to-gray-100 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Recruit Me If You Can! 🛫
        </h1>
        <DataTable
          columns={columns}
          data={[
            {
              id: "1",
              title: "Full Stack Webdeveloper",
              recruiter: "Tammy Banani",
              techstack: [
                "React, TypeScript",
                "Java",
                "SQL",
                "AWS",
                "React, TypeScript",
                "Java",
                "SQL",
                "AWS",
              ],
              salery: "50.000 - 80.000",
              location: "Berlin",
              submitted: new Date(),
              remote: "Hybrid",
            },
          ]}
        />
      </div>
    </main>
  );
}
