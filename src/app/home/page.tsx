import ScFAQ from "@/components/sc-faq";
import ScSeeInAction from "@/components/sc-see-in-action";
import ScStackConsoleFeatures from "@/components/sc-stack-console-features";
import ScTransformIdeas from "@/components/sc-transforming-ideas";
import ScTrustedCloudInnovators from "@/components/sc-trusted-cloud-innovators";
import ScWhoForStacKConsole from "@/components/sc-who-for-stackconsole";
import ScCloudEcosystem from "@/components/sc-cloud-ecosystem";
import { ScHeroClient } from "@/components/sc-hero.client";
import CTASection from "@/components/footer-cta";

const Page = () => {
  return (
    <div>
      <ScHeroClient />
      <ScTrustedCloudInnovators />
      <ScTransformIdeas />
      <ScSeeInAction />
      <ScCloudEcosystem />
      <ScStackConsoleFeatures />
      <ScWhoForStacKConsole />
      <ScFAQ />
      <CTASection />
    </div>
  );
};

export default Page;
