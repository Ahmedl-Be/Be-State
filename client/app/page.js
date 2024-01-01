import HeroBanner from "@/components/HeroBanner";
import Slider from "@/components/slider/Slider";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main className="bg-slate-100">
      <HeroBanner />
      <Slider />
      <Categories category={"Recent offers"}/>
      <Categories category={"Recent places for rent"}/>
      <Categories category={"Recent places for sale"}/>
    </main>
  )
}
