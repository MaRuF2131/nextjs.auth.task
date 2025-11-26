import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className=" min-h-screen  bg-zinc-50 font-sans dark:bg-black">
       <Navbar></Navbar>
       <Hero></Hero>
       <Footer></Footer>
    </div>
  );
}
