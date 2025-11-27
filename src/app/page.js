import Hero from "@/components/Hero";
import Section from "@/components/Section";
import TrendingProduct from "@/components/TrendingProduct";

export default function Home() {
  return (
    <div className=" min-h-screen  bg-zinc-50 font-sans">
        <Hero></Hero>
        <TrendingProduct />
        <Section title="Why Choose Us" subtitle="Quality, affordability, and trust" />
        <Section title="Testimonials" subtitle="Customers love our products!" />
        <Section title="Get Started" subtitle="Join us today and explore more" />
    </div>
  );
}
