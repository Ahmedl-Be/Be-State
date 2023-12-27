import HeroBanner from "@/components/HeroBanner";
import Card from "@/components/UI/Card";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <main className="bg-slate-100">
      <HeroBanner />
      <Slider />
      <div className="grid lg:grid-cols-3 grid-cols-1	">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}
