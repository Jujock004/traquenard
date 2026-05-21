import Hero from "@/components/home/Hero";
import Artists from "@/components/home/Artists";
import Manifeste from "@/components/home/Manifeste";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Manifeste />
        <Artists />
      </main>
    </div>
  );
}
