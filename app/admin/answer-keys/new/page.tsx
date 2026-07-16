import AdminLayout from "@/components/admin/layout/AdminLayout";
import AnswerKeyForm from "@/components/admin/answerKeys/AnswerKeyForm";

export default function NewAnswerKeyPage() {
  return (
    <AdminLayout>

      <h1 className="mb-8 text-4xl font-bold">
        ➕ Add Answer Key
      </h1>

      <AnswerKeyForm />

    </AdminLayout>
  );
}