import AnswerKeyForm from "@/components/admin/answer-keys/AnswerKeyForm";

export default function NewAnswerKeyPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold">
          Add New Answer Key
        </h1>

        <AnswerKeyForm />

      </div>

    </main>
  );
}