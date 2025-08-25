// ScSectionRenderer.tsx
import { JSX } from 'react';
import ScHero from '@/components/sc-hero';
import ScTrustedCloudInnovators from '@/components/sc-trusted-cloud-innovators';
import ScInfityCloudPower from '@/components/sc-inifity-cloud-power';
import ScCloudCommerceHero from '@/components/sc-cloud-commerce-hero';
import ScCloudEcosystem from '@/components/sc-cloud-ecosystem';
import ScStackConsoleFeatures from '@/components/sc-stack-console-features';
import ScFAQ from '@/components/sc-faq';
import ScCta from '@/components/sc-footer-cta';
import ScSeeInAction from '@/components/sc-see-in-action';
import ScTurningIdeasCloudPowerBusiness from '@/components/sc-cloud-power-business';
import ScPlatformCapabilitiesGrid from '@/components/sc-platform-capacilities';
import ScExperienceSection from '@/components/sc-experiences';
import ScWhoForStacKConsole from '@/components/sc-who-for-stackconsole';
import ScWhyChooseAndCTA from '@/components/sc-why-choose-us-cta';
import ScCloudIntegrationsHero from '@/components/sc-clound-integrations';

import type { Section, SectionByName } from '@/gql/section-types';
import { PageSectionsByUriQuery } from '@/gql/__generated__/graphql';
import { ScCloudIntegrationsPosts } from '@/components/sc-cloud-integrations-posts';

type SectionMap = {
  [K in Section['__typename']]:
    (props: SectionByName<K>) => JSX.Element | null;
};

const map: SectionMap = {
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
  PageBuilderSectionsCloudIntegrationsHeroLayout: (props) => (
    <ScCloudIntegrationsHero {...props} />
  ),
  PageBuilderSectionsCloudIntegrationsPostsLayout: (props) => (
    <ScCloudIntegrationsPosts {...props} />
  ),
};

type Section =
  NonNullable<PageSectionsByUriQuery['page']>['pageBuilder']['sections'][number];
type SectionNullable = Section | null | undefined;


export default function ScSectionRenderer({ sections }: { sections: SectionNullable[] }) {
  return (
    <>
      {sections.map((s, i) => {
        if (!s) return null;
        const Comp = map[s.__typename];
        return Comp ? <Comp key={s.fieldGroupName ?? i} {...s} /> : null;
      })}
    </>
  );
}