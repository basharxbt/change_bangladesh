import Hero from "@/component/Hero";
import Goals from "@/component/Goals";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <Goals />
    </main>
  );
}
