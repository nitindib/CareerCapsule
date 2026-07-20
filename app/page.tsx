import FeaturedSyllabus from "@/components/home/FeaturedSyllabus";
import TodayDashboard from "@/components/home/TodayDashboard";
import BreakingTicker from "@/components/home/BreakingTicker";
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
      <BreakingTicker />
      <TodayDashboard />
      
      <FeatureCards />

      <FeaturedJobs />

      <LatestJobs />

      <LatestResults />
      <FeaturedSyllabus />

      <TrendingSearches />

    </main>
  );
}