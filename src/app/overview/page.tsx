import ScExperienceSection from "@/components/sc-experiences";
import ScInfityCloudPower from "@/components/sc-inifity-cloud-power";
import ScWhyChooseAndCTA from "@/components/sc-why-choose-us-cta";
import PlatformCapabilitiesGrid from "@/components/sc-platform-capacilities";
import ScCloudCommerceHero from "@/components/sc-cloud-commerce-hero";

const Page = () => {
  return (
    <div>
      <ScCloudCommerceHero />
      <ScInfityCloudPower />
      <PlatformCapabilitiesGrid />
      <ScExperienceSection />
      <ScWhyChooseAndCTA />
    </div>
  );
};

export default Page;
