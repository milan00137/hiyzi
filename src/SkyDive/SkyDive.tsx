"use client";

import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";

type Props = {};

export default function SkyDive({}: Props) {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">Dive into better health</h2>
      <View className="h-screen w-screen">
        <Scene flavor="blackCherry" sentence={"Dive into better health"} />
      </View>
    </Bounded>
  );
}
