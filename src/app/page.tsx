import AlternatingText from "@/AlternatingText/AlternatingText";
import BigTexts from "@/BigTexts/BigTexts";
import Carousel from "@/Carousel/Carousel";
import Hero from "@/Hero/Hero";
import SkyDive from "@/SkyDive/SkyDive";


export default function Home() {
  return (
    <>
    <Hero></Hero>
    <SkyDive />
    <Carousel />
    <AlternatingText />
    <BigTexts />
    </>
  );
}
