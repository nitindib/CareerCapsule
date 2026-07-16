"use client";

const news = [
  "🔥 SSC CGL 2026 Notification Released",
  "🚆 Railway NTPC Admit Card Released",
  "🏦 IBPS PO Registration Started",
  "👮 UP Police Result Declared",
  "🎓 UPSC NDA Online Form Available",
];

export default function BreakingTicker() {
  return (
    <section className="mx-auto mt-6 max-w-7xl px-6">

      <div className="flex overflow-hidden rounded-xl border border-red-200 bg-white shadow-sm">

        {/* Left */}

        <div className="flex items-center bg-red-600 px-5 py-3 font-bold text-white whitespace-nowrap">
          🔥 Breaking
        </div>

        {/* Right */}

        <div className="relative flex-1 overflow-hidden">

          <div className="ticker flex whitespace-nowrap py-3">

            {[...news, ...news].map((item, index) => (

              <span
                key={index}
                className="mx-10 font-medium text-slate-700"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
