"use client";

import { useState } from "react";
import LoadingState from "./LoadingState";
import AIResult from "./AIResult";

export default function CareerGuideForm() {
  const [qualification, setQualification] = useState("Graduate");
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("General");
  const [state, setState] = useState("");
  const [interest, setInterest] = useState("");

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/ai-guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qualification,
          age,
          category,
          state,
          interest,
        }),
      });

      const data = await res.json();

      let parsed = [];

      try {
        parsed = JSON.parse(data.text);
      } catch {
        parsed = [];
      }

      setResults(parsed);
    } catch (err) {
      console.error(err);
      alert("AI Error");
    }

    setLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-12 rounded-3xl bg-white p-10 shadow-xl"
      >
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-semibold">
              🎓 Qualification
            </label>

            <select
              value={qualification}
              onChange={(e) =>
                setQualification(e.target.value)
              }
              className="w-full rounded-2xl border p-4"
            >
              <option>10th</option>
              <option>12th</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              🎂 Age
            </label>

            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-2xl border p-4"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              🏷 Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full rounded-2xl border p-4"
            >
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
              <option>EWS</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              📍 State
            </label>

            <input
              value={state}
              onChange={(e) =>
                setState(e.target.value)
              }
              className="w-full rounded-2xl border p-4"
            />
          </div>
                    <div className="md:col-span-2">
            <label className="mb-4 block font-semibold">
              ❤️ Interest
            </label>

            <div className="flex flex-wrap gap-3">
              {[
                "SSC",
                "Railway",
                "Banking",
                "Police",
                "Defence",
                "Teaching",
                "UPSC",
                "State PSC",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setInterest(item)}
                  className={`rounded-full border px-5 py-3 transition ${
                    interest === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          className="mt-10 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-lg font-bold text-white disabled:opacity-60"
        >
          {loading
            ? "🤖 AI is Thinking..."
            : "🚀 Find Best Career"}
        </button>
      </form>

      {loading && <LoadingState />}

      {!loading && results.length > 0 && (
        <AIResult results={results} />
      )}
    </>
  );
}