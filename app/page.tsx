import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import FeatureCards from "@/components/ui/FeatureCards";
import LatestJobs from "@/components/ui/LatestJobs";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <Hero />

      <FeatureCards />

      <LatestJobs />
    </main>
  );
}