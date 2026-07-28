import SearchResults from "@/components/search/SearchResults";

import { getJobs } from "@/services/jobs";
import { getResults } from "@/services/results";
import { getAdmitCards } from "@/services/admitCards";
import { getSyllabus } from "@/services/syllabus";
import { getAnswerKeys } from "@/services/answerKeys";

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
  const results = await getResults(q);
  const admitCards = await getAdmitCards(q);
  const syllabus = await getSyllabus(q);
const answerKeys = await getAnswerKeys(q);

  return (

    <main className="mx-auto max-w-7xl px-6 py-14">

      <h1 className="text-5xl font-bold">
        🔍 Search Results
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        Showing results for
        <span className="font-bold text-blue-600">
          {" "}
          {q || "All"}
        </span>
      </p>

      <SearchResults
  jobs={jobs}
  results={results}
  admitCards={admitCards}
  syllabus={syllabus}
  answerKeys={answerKeys}
/>

    </main>

  );

}