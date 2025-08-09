import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/platforms";
// import { VirtualTerminal } from "@/components/VirtualTerminal";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#12121c] to-[#0d0d15]">
      <Navbar />
      <Hero />
      <Products />
      {/* <VirtualTerminal /> */}
      
    </div>
  );
}
