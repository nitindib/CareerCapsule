import { getJobs } from "@/services/jobs";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: Props) {

  const { q } = await searchParams;

  const jobs = await getJobs(q);

  return (

    <main className="mx-auto max-w-7xl px-6 py-14">

      <h1 className="text-5xl font-bold">

        Search Results

      </h1>

      <p className="mt-3 text-slate-600">

        Showing results for:
        <span className="font-bold"> {q}</span>

      </p>

      <div className="mt-10 space-y-5">

        {jobs.length === 0 ? (

          <div className="rounded-2xl bg-white p-10 shadow">

            No Jobs Found

          </div>

        ) : (

          jobs.map((job: any) => (

            <div
              key={job.id}
              className="rounded-2xl bg-white p-6 shadow"
            >

              <h2 className="text-2xl font-bold">

                {job.title}

              </h2>

              <p className="mt-2 text-slate-600">

                {job.organization}

              </p>

              <Link
                href={`/jobs/${job.id}`}
                className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 text-white"
              >

                View Details

              </Link>

            </div>

          ))

        )}

      </div>

    </main>

  );

}