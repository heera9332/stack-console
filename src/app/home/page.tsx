import SCFAQ from "@/components/sc-faq";
import ScHero from "@/components/sc-hero";
import ScSeeInAction from "@/components/sc-see-in-action";
import ScTransformIdeas from "@/components/sc-transforming-ideas";
import ScTrustedCloudInnovators from "@/components/sc-trusted-cloud-innovators";
import ScWhoForStacKConsole from "@/components/sc-who-for-stackconsole";
import ScCloudEcosystem from "@/components/ScCloudEcosystem";

const Page = () => {
  return (
    <div>
      <h1>Home Test page</h1>
      <ScHero/>
      <ScTrustedCloudInnovators/>
      <ScCloudEcosystem/>
      <ScTransformIdeas/>
      <ScSeeInAction/>
      <ScWhoForStacKConsole/>
      <SCFAQ />
    </div>
  );
};

export default Page;
