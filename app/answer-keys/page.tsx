import { getAnswerKeys } from "@/services/answerKeys";
import Link from "next/link";

export default async function AnswerKeysPage() {

  const answerKeys = await getAnswerKeys();

  return (

    <main className="min-h-screen bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-8 text-4xl font-bold">
          📄 Latest Answer Keys
        </h1>

        <div className="grid gap-6">

          {answerKeys.map((item: any) => (

            <Link
              key={item.id}
              href={`/answer-keys/${item.id}`}
              className="rounded-2xl bg-white p-6 shadow transition hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-slate-600">
                    {item.organization}
                  </p>

                </div>

                {item.featured && (

                  <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
                    ⭐ Featured
                  </span>

                )}

              </div>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">

                <span>
                  📅 {item.release_date}
                </span>

                <span>
                  📝 {item.exam_name}
                </span>

                <span>
                  📌 {item.status}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );

}