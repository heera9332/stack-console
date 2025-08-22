"use client";
import dynamic from "next/dynamic";
import ScHeroSkeleton from "./sections/skelatons/sc-hero-skeleton";

const ScHero = dynamic(() => import("./sc-hero"), {
  ssr: false, // allowed here (client file)
  loading: () => <ScHeroSkeleton/>
});

export const ScHeroClient = () => {
  return <ScHero />;
};
