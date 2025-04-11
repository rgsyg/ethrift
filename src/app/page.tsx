import Categories from "@/components/contents/categories";
import Hero from "@/components/contents/hero";

export default function Home() {
  return (
    <main className="h-full space-y-6">
      <Hero />
      <Categories />
    </main>
  );
}
