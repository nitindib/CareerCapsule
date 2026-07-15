import AdmitCardForm from "@/components/admin/admit-cards/AdmitCardForm";

export default function NewAdmitCardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-4xl font-bold">
          Add New Admit Card
        </h1>

        <AdmitCardForm />

      </div>
    </main>
  );
}