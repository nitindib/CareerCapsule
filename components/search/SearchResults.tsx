"use client";

import { useState } from "react";
import JobSearchCard from "./JobSearchCard";
import ResultSearchCard from "./ResultSearchCard";
import AdmitCardSearchCard from "./AdmitCardSearchCard";
import AnswerKeySearchCard from "./AnswerKeySearchCard";
import SyllabusSearchCard from "./SyllabusSearchCard";

type Props = {
  jobs: any[];
  results: any[];
  admitCards: any[];
  answerKeys: any[];
  syllabus: any[];
  
};

export default function SearchResults({
  jobs,
  results,
  admitCards,
   answerKeys,
  syllabus,
 
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

All (
  {jobs.length +
    results.length +
    admitCards.length +
    answerKeys.length}+
    syllabus.length 
    
)

</button>

<button
onClick={() => setTab("jobs")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "jobs"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

💼 Jobs ({jobs.length})

</button>

<button
onClick={() => setTab("results")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "results"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

📢 Results ({results.length})

</button>

<button
onClick={() => setTab("admit")}
className={`rounded-xl px-5 py-3 font-semibold ${
tab === "admit"
? "bg-blue-600 text-white"
: "bg-white shadow"
}`}
>

🎫 Admit Cards ({admitCards.length})

</button>
<button
  onClick={() => setTab("answer")}
  className={`rounded-xl px-5 py-3 font-semibold ${
    tab === "answer"
      ? "bg-blue-600 text-white"
      : "bg-white shadow"
  }`}
>
  📝 Answer Keys ({answerKeys.length})
</button>
<button
  onClick={() => setTab("syllabus")}
  className={`rounded-xl px-5 py-3 font-semibold ${
    tab === "syllabus"
      ? "bg-blue-600 text-white"
      : "bg-white shadow"
  }`}
>
  📘 Syllabus ({syllabus.length})
</button>




</div>
{/* ================= JOBS ================= */}

{(tab === "all" || tab === "jobs") && (
  <section className="space-y-5">

    <div className="mb-3 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-3 py-2">
  <h2 className="text-lg font-bold text-blue-700">
    💼 Government Jobs ({jobs.length})
  </h2>
</div>

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

<div className="mb-3 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-3 py-2">

  <h2 className="text-lg font-bold text-blue-700">

    📢 Results ({results.length})

  </h2>

</div>

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

<div className="mb-3 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-3 py-2">

  <h2 className="text-lg font-bold text-blue-700">

   🎫 Admit Cards ({admitCards.length})

  </h2>

</div>

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
{(tab === "all" || tab === "answer") && (

<section className="mt-14 space-y-5">

<div className="mb-3 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-3 py-2">

  <h2 className="text-lg font-bold text-blue-700">

📝 Answer Keys ({answerKeys.length})

  </h2>

</div>

{answerKeys.length === 0 ? (

<div className="rounded-2xl bg-white p-8 shadow">
No Answer Keys Found
</div>

) : (

answerKeys.map((item: any) => (

<AnswerKeySearchCard
  key={item.id}
  answerKey={item}
/>

))

)}

</section>

)}
{(tab === "all" || tab === "syllabus") && (

<section className="mt-14 space-y-5">

<div className="mb-3 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-3 py-2">

  <h2 className="text-lg font-bold text-blue-700">

 📘 Syllabus ({syllabus.length})

  </h2>

</div>

{syllabus.length === 0 ? (

<div className="rounded-2xl bg-white p-8 shadow">
No Syllabus Found
</div>

) : (

syllabus.map((item: any) => (

<SyllabusSearchCard
  key={item.id}
  syllabus={item}
/>

))

)}

</section>

)}

</div>

);
}