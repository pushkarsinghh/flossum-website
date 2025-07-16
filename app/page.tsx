import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#12121c] to-[#0d0d15]">
      <Navbar />
      <Hero />
    </div>
  );
}
