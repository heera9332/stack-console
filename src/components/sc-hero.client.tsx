"use client";
import dynamic from "next/dynamic";

const ScHero = dynamic(() => import("./sc-hero"), {
  ssr: false, // allowed here (client file)
  // loading: () => <div style={{height: 560}} /> // optional placeholder
});

export const ScHeroClient = () => {
  return <ScHero />;
};
