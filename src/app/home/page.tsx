import ScFAQ from "@/components/sc-faq";
import ScSeeInAction from "@/components/sc-see-in-action";
import ScStackConsoleFeatures from "@/components/sc-stack-console-features";
import ScTrustedCloudInnovators from "@/components/sc-trusted-cloud-innovators";
import ScWhoForStacKConsole from "@/components/sc-who-for-stackconsole";
import ScCloudEcosystem from "@/components/sc-cloud-ecosystem";
import { ScHeroClient } from "@/components/sc-hero.client";
import ScCta from "@/components/sc-footer-cta";
import ScTurningIdeasCloudPowerBusiness from "@/components/sc-cloud-power-business";

const Page = () => {
  return (
    <div>
      <ScHeroClient />
      <ScTrustedCloudInnovators />
      <ScTurningIdeasCloudPowerBusiness />
      <ScSeeInAction />
      <ScCloudEcosystem />
      <ScStackConsoleFeatures />
      <ScWhoForStacKConsole />
      <ScFAQ />
      <ScCta />
    </div>
  );
};

export default Page;
