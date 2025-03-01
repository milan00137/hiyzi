"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bounded } from "@/components/Bounded";
import { TextSplitter } from "@/components/TextSplitter";
import Image from "next/image";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useBearStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = object;

export default function Hero({}: Props) {
  const ready = useBearStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word .split-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <Bounded className="hero opacity-0">
      {/* style={{position: "sticky", pointerEvents: 'none', top: 0, zIndex: 50, marginTop: "-100vh", height: "100vh", width: "100vh" }} */}
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-screen hidden md:block">
          <Scene />
          <Bubbles />
        </View>
      )}

      <div className="grid">
        <div className="grid h-dvh place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header hero-header-word lg:text-[13rem] text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem]">
              <TextSplitter text="Live Gutsy" wordDisplayStyle="block" />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              <p>Soda Perfected</p>
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
              <p>3-5g sugar. 9g fiber. 5 delicious flavors.</p>
            </div>
            <a href="#" className="customized-button hero-button mt-12">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="grid text-side relative z-[80] h-dvh items-center gap-4 md:grid-cols-2">
          <Image
            className="md:hidden w-full"
            src="/assets/hiyzi_cans.png"
            layout="intrinsic"
            width={1200}
            height={800}
            quality={75}
            alt="Optimized Image"
          ></Image>
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text="TRY ALL FIVE FLAVORS" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance font-normal text-sky-950">
              <p>
                Our soda is made with real fruit juice and a touch of cane
                sugar. We never use artificial sweeteners or high fructose corn
                syrup. Try all five flavors and find your favorite!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
