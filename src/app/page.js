import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-zinc-50 font-sans dark:bg-black">
       <Navbar></Navbar>
       <Hero></Hero>
    </div>
  );
}
