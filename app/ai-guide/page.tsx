import CareerGuideForm from "@/components/ai/CareerGuideForm";

export default function AIGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="text-center text-5xl font-bold">
          🤖 AI Career Guide
        </h1>

        <p className="mt-4 text-center text-slate-600">
          Tell us about yourself and AI will suggest the best career options.
        </p>

        <CareerGuideForm />

      </div>

    </main>
  );
}