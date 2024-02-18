import Image from "next/image";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Products from "./components/Products";
export default function Home() {
  return (
    <main className="lg:pt-[170px]">
      <Slider />
      <Products />
    </main>
  );
}
