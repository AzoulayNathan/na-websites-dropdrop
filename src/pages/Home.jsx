import React from "react";
import SceneAppel from "@/components/home/SceneAppel";
import SceneSeparation from "@/components/home/SceneSeparation";
import SceneBapteme from "@/components/home/SceneBapteme";
import SceneMetamorphose from "@/components/home/SceneMetamorphose";
import ScenePromesse from "@/components/home/ScenePromesse";

export default function Home() {
  return (
    <>
      {/* 1. L'Appel — underwater hero */}
      <SceneAppel />
      {/* 2. La Séparation — chaos vs calm */}
      <SceneSeparation />
      {/* 3. Le Baptême — the proof */}
      <SceneBapteme />
      {/* 4. La Métamorphose — kit as sculpture */}
      <SceneMetamorphose />
      {/* 5. La Promesse — sunset CTA */}
      <ScenePromesse />
    </>
  );
}