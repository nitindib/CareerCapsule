export default function LoadingState() {
  return (
    <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-xl">

      <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>

      <h2 className="mt-6 text-3xl font-bold">
        🤖 AI is analyzing your profile...
      </h2>

      <p className="mt-3 text-slate-600">
        Finding the best government jobs for you...
      </p>

    </div>
  );
}