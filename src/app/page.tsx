import Categories from "@/components/contents/categories";
import Hero from "@/components/contents/hero";

export default function Home() {
  return (
    <main className="bg-amber-300 h-full space-y-6">
      <Hero />
      <Categories />
    </main>
  );
}
