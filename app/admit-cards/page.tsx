import Link from "next/link";
import { getAdmitCards } from "@/services/admitCards";

export default async function AdmitCardsPage() {

  const admitCards = await getAdmitCards();

  return (

    <main className="mx-auto max-w-7xl px-6 py-14">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          🎫 Latest Admit Cards
        </h1>

        <p className="mt-3 text-slate-600">
          Download latest admit cards for all exams.
        </p>

      </div>

      <div className="grid gap-6">

        {admitCards.map((card: any) => (

          <div
            key={card.id}
            className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition"
          >

            <h2 className="text-3xl font-bold">

              {card.title}

            </h2>

            <p className="mt-2 text-slate-600">

              {card.organization}

            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <span className="rounded-full bg-green-100 px-4 py-2">

                Admit Card :
                {card.admit_card_date}

              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2">

                Exam :
                {card.exam_date}

              </span>

            </div>

            <Link
              href={`/admit-cards/${card.id}`}
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white"
            >

              View Details →

            </Link>

          </div>

        ))}

      </div>

    </main>

  );

}