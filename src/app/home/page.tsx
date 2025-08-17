import ScFAQ from "@/components/sc-faq";
import ScHero from "@/components/sc-hero";
import ScSeeInAction from "@/components/sc-see-in-action";
import ScStackConsoleFeatures from "@/components/sc-stack-console-features";
import ScTransformIdeas from "@/components/sc-transforming-ideas";
import ScTrustedCloudInnovators from "@/components/sc-trusted-cloud-innovators";
import ScWhoForStacKConsole from "@/components/sc-who-for-stackconsole";
import ScCloudEcosystem from "@/components/ScCloudEcosystem";

const Page = () => {
  return (
    <div>
      <ScHero />
      <ScTrustedCloudInnovators />
      <ScTransformIdeas />
      <ScSeeInAction />
      <ScCloudEcosystem />
      <ScStackConsoleFeatures />
      <ScWhoForStacKConsole />
      <ScFAQ />
    </div>
  );
};

export default Page;
