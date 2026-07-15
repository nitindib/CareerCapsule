import LiveStats from "@/components/ui/LiveStats";
import TrendingSearches from "@/components/ui/TrendingSearches";
import FeaturedJobs from "@/components/ui/FeaturedJobs";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import FeatureCards from "@/components/ui/FeatureCards";
import LatestJobs from "@/components/ui/LatestJobs";
import LatestResults from "@/components/ui/LatestResults";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Header />

      <Hero />
      <LiveStats />

      <FeatureCards />

      <FeaturedJobs />

      <LatestJobs />

      <LatestResults />

      <TrendingSearches />

    </main>
  );
}