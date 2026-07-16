import RecommendationCard from "./RecommendationCard";

type Props = {
  results: any[];
};

export default function AIResult({
  results,
}: Props) {
  return (
    <div className="mt-12">

      <h2 className="mb-8 text-4xl font-bold">
        🤖 AI Recommendations
      </h2>

      <div className="space-y-6">

        {results.map((item, index) => (

          <RecommendationCard
            key={index}
            title={item.title}
            salary={item.salary}
            difficulty={item.difficulty}
            preparation={item.preparation}
          />

        ))}

      </div>

    </div>
  );
}