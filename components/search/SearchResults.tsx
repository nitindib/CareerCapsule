"use client";

import { useState } from "react";
import JobSearchCard from "./JobSearchCard";
import ResultSearchCard from "./ResultSearchCard";
import AdmitCardSearchCard from "./AdmitCardSearchCard";
type Props = {
  jobs: any[];
  results: any[];
  admitCards: any[];
};

export default function SearchResults({
  jobs,
  results,
  admitCards,
}: Props) {

  const [tab, setTab] = useState("all");
  return (

<div>

<div className="mb-10 flex flex-wrap gap-4">

<button
onClick={() => setTab("all")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "all"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

All ({jobs.length + results.length + admitCards.length})

</button>

<button
onClick={() => setTab("jobs")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "jobs"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

Jobs ({jobs.length})

</button>

<button
onClick={() => setTab("results")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "results"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

Results ({results.length})

</button>

<button
onClick={() => setTab("admit")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "admit"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

Admit Cards ({admitCards.length})

</button>

</div>
{/* ================= JOBS ================= */}

{(tab === "all" || tab === "jobs") && (
  <section className="space-y-5">

    <h2 className="mb-4 text-3xl font-bold">
      💼 Jobs
    </h2>

    {jobs.length === 0 ? (

      <div className="rounded-2xl bg-white p-8 shadow">
        No Jobs Found
      </div>

    ) : (

      jobs.map((job: any) => (

        <JobSearchCard
          key={job.id}
          job={job}
        />

      ))

    )}

  </section>
)}
{/* ================= RESULTS ================= */}

{(tab === "all" || tab === "results") && (

<section className="mt-14 space-y-5">

<h2 className="mb-4 text-3xl font-bold">
📢 Results
</h2>

{results.length === 0 ? (

<div className="rounded-2xl bg-white p-8 shadow">
No Results Found
</div>

) : (

results.map((result: any) => (

<ResultSearchCard
key={result.id}
result={result}
/>

))

)}

</section>

)}
{/* ================= ADMIT CARDS ================= */}

{(tab === "all" || tab === "admit") && (

<section className="mt-14 space-y-5">

<h2 className="mb-4 text-3xl font-bold">
🎫 Admit Cards
</h2>

{admitCards.length === 0 ? (

<div className="rounded-2xl bg-white p-8 shadow">
No Admit Cards Found
</div>

) : (

admitCards.map((card: any) => (

<AdmitCardSearchCard
key={card.id}
card={card}
/>

))

)}

</section>

)}
</div>

);
}