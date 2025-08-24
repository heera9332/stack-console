import { JSX } from "react";
import ScHero from "@/components/sc-hero";
import ScTrustedCloudInnovators from "@/components/sc-trusted-cloud-innovators";
import ScInfityCloudPower from "@/components/sc-inifity-cloud-power";
import ScCloudCommerceHero from "@/components/sc-cloud-commerce-hero";
import ScCloudEcosystem from "@/components/sc-cloud-ecosystem";
import ScStackConsoleFeatures from "@/components/sc-stack-console-features";
import ScFAQ from "@/components/sc-faq";
import ScCta from "@/components/sc-footer-cta";
import ScSeeInAction from "@/components/sc-see-in-action";
import ScTurningIdeasCloudPowerBusiness from "@/components/sc-cloud-power-business";
import ScPlatformCapabilitiesGrid from "@/components/sc-platform-capacilities";
import ScExperienceSection from "@/components/sc-experiences";
import ScWhoForStacKConsole from "@/components/sc-who-for-stackconsole";
import ScWhyChooseAndCTA from "@/components/sc-why-choose-us-cta";

const map: Record<string, (props: any) => JSX.Element | null> = {
  PageBuilderSectionsHeroLayout: (props) => <ScHero {...props} />,
  PageBuilderSectionsCloudInnovatorsLayout: (props) => (
    <ScTrustedCloudInnovators {...props} />
  ),
  PageBuilderSectionsInfiniteCloudConsoleLayout: (props) => (
    <ScInfityCloudPower {...props} />
  ),
  PageBuilderSectionsCloudCommercePlatformLayout: (props) => (
    <ScCloudCommerceHero {...props} />
  ),
  PageBuilderSectionsCloudPowerBusinessLayout: (props) => (
    <ScSeeInAction {...props} />
  ),
  PageBuilderSectionsIntegratedCloudEcosystemLayout: (props) => (
    <ScCloudEcosystem {...props} />
  ),
  PageBuilderSectionsStackConsoleFeaturesLayout: (props) => (
    <ScStackConsoleFeatures {...props} />
  ),
  PageBuilderSectionsFaqsLayout: (props) => <ScFAQ {...props} />,
  PageBuilderSectionsBeforefooterctaLayout: (props) => <ScCta {...props} />,
  PageBuilderSectionsTurningideascloudpowerbusinessLayout: (props) => (
    <ScTurningIdeasCloudPowerBusiness {...props} />
  ),
  PageBuilderSectionsPlatformCapabilitiesGridLayout: (props) => (
    <ScPlatformCapabilitiesGrid {...props} />
  ),

  PageBuilderSectionsExperienceStackLayout: (props) => (
    <ScExperienceSection {...props} />
  ),
  PageBuilderSectionsWhyChooseStackConsoleLayout: (props) => (
    <ScWhyChooseAndCTA {...props} />
  ),
  PageBuilderSectionsWhoIsForStackConsoleLayout: (props) => (
    <ScWhoForStacKConsole {...props} />
  ),
};

export default function ScSectionRenderer({ sections }: { sections: any[] }) {
  console.log(sections.slice(0));
  return (
    <>
      {sections?.map((s, i) => {
        const Comp = map[s?.__typename as string];
        return Comp ? <Comp key={i} {...s} /> : null;
      })}
    </>
  );
}
